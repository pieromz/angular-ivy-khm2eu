import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './component/class/user';
import { GlobalConstants } from './global/constants';

@Component({
  selector: 'main-app',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class MainComponent {
  @Input() versioneAngular: string;

  public utenteSelezionato: boolean = false;
  public utenteDaModificare: User = new User();

  nome: string;
  cognome: string;

  titoloApp = GlobalConstants.titleApp;

  indice: number = 15;
  indiceTwoBinding: number = 1;

  constructor() {
    this.nome = 'PIERO';
    this.cognome = 'MARTUCCI ZECCA';
  }

  aggiungiUtenteDaForm() {
    this.utenteDaModificare = new User();
    this.utenteSelezionato = true;
  }

  aggiungiUtenteDaHeader(oggettoPerEmit: User): void {
    this.aggiungiUtenteDaForm();
  }

  nascondiForm() {
    this.utenteSelezionato = false;
  }

  modificaUtenteDaComponenteFiglio(oggettoPerEmit: User): void {
    if (oggettoPerEmit.id > 0) {
      this.utenteDaModificare = oggettoPerEmit;
      this.utenteSelezionato = true;
    }
  }
}
