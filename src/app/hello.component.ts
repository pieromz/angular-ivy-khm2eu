import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalConstants } from './global/constants';

@Component({
  selector: 'hello',
  templateUrl: './title.html',
  styleUrls: ['./title.css'],
})
export class HelloComponent {
  @Input() versioneAngular: string;

  public utenteSelezionato: boolean = false;

  nome: string;
  cognome: string;

  titoloApp = GlobalConstants.titleApp;

  indice: number = 15;
  indiceTwoBinding: number = 1;

  constructor() {
    this.nome = 'PIERO';
    this.cognome = 'MARTUCCI ZECCA';
  }

  modificaUtenteDaComponenteFiglio(oggettoPerEmit: any): void {
    if (oggettoPerEmit.id > 0) {
      this.utenteSelezionato = true;
    }
  }
}
