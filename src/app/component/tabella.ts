import { BigInteger } from '@angular/compiler/src/i18n/big_integer';
import { Component, Input, Output } from '@angular/core';
import { GlobalConstants } from '../global/constants';
import { Alert } from '../obj/alertObj';
//import { FormGroup } fstatic errori: any;

import { Persona } from '../obj/persona';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'tabella',
  templateUrl: './tabella.html',
  styleUrls: ['../global/global.css'],
})
export class TabellaComponent {
  @Input() nome: string;
  @Input() cognome: string;
  @Input() indice: number;
  @Output() indiceTwoBinding: number;

  persone: Array<Persona>;
  avvisi: Array<Alert>;

  //form: FormGroup;

  constructor(private logger: LogService) {}

  ngOnInit() {
    this.logger.log('OnInit Metod component Tabella');
    this.nome = this.nome + '2';
    this.increment();
    this.persone = [];
    this.avvisi = [];

    this.creaPersona('MARIO', 'ROSSI', 48, undefined);
    this.creaPersona('PIERO', 'MARTUCCI ZECCA', 29, [
      { id: 1, valore: '3427566914' },
      { id: 2, valore: '0805325662' },
    ]);
  }

  increment() {
    this.logger.log('Increment Metod component Tabella');
    this.indice = this.indice + 1;
    this.indiceTwoBinding = this.indiceTwoBinding + 1;

    //INIZIO PROVA PROMISE
    let p = Promise.resolve('promise resolved');
    p.then((res) => {
      console.log('OK ' + res);
    }).catch((err) => {
      console.log('KO ' + err);
    });

    let prom = new Promise(function (resolve, reject) {
      //resolve(24);
      //reject(24);
      throw new Error('ERRORE!!!!');
    });
    prom
      .then((a) => {
        console.log('OK ' + a);
      })
      .catch((err) => {
        console.log('KO ' + err);
      });

    //FINE PROVA PROMISE
  }

  decrement() {
    this.logger.log('Decrement Metod component Tabella');
    this.indice = this.indice - 1;
    this.indiceTwoBinding = this.indiceTwoBinding - 1;

    //INIZIO PROVA PROMISE
    let p = Promise.reject('promise reject');

    p.then((res) => {
      console.log('OK ' + res);
    }).catch((err) => {
      console.log('KO ' + err);
    });
    //FINE PROVA PROMISE
  }

  creaPersona(nome, cognome, eta, contatti) {
    this.addPersona(nome, cognome, eta, contatti);
  }

  addPersona(nome, cognome, eta, contatti) {
    let idPersona = this.calcolaIdPersona();
    let p1 = new Persona(idPersona, nome, cognome, eta, contatti);
    this.persone.push(p1);
  }

  calcolaIdPersona() {
    let idNew = 0;
    for (let i = 0; i < this.persone.length; i++) {
      idNew = this.persone[i].id + 1;
    }
    if (idNew == 0) {
      idNew = idNew + 1;
    }
    return idNew;
  }

  eliminaPersona(id: number) {
    var indice = this.trovaIndicePersonaById(id);
    if (indice >= 0) {
      this.persone.splice(indice, 1);
      this.aggiungiAlert('info', 'ELEMENTO ELIMINATO');
    } else {
      alert('INDICE PERSONA NON PRESENTE!');
    }
  }

  aggiungiAlert(t: string, m: string) {
    var element = new Alert(t, m);
    this.avvisi.push(element);

    GlobalConstants.errori.push(element);
  }

  trovaIndicePersonaById(id: number) {
    let index = this.persone.findIndex((p) => p.id == id);
    return index;
  }

  /*
  onSubmit(): void {
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.form.reset();
  }
  */
}
