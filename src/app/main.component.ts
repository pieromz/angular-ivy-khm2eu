import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './component/model/user';
import { GlobalConstants } from './global/constants';

@Component({
  selector: 'main-app',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class MainComponent {
  @Input() versioneAngular: string;

  public utenteSelezionato: boolean = false;
  public utenteDaModificare: User;

  nome: string;
  cognome: string;

  titoloApp = GlobalConstants.titleApp;

  indice: number = 15;
  indiceTwoBinding: number = 1;

  constructor() {
    this.nome = 'PIERO';
    this.cognome = 'MARTUCCI ZECCA';
  }

  modificaUtenteDaComponenteFiglio(oggettoPerEmit: User): void {
    if (oggettoPerEmit.id > 0) {
      this.utenteDaModificare = oggettoPerEmit;
      this.utenteSelezionato = true;
    }
  }
}
