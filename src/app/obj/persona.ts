import { LogService } from '../shared/log.service';

export class Persona {
  public id: number;
  public nome: string;
  public cognome: string;
  public eta: number;
  public contatti?: any; //? indica che il parametro e' opzionale
  [propName: string]: any; //IMPORTANTE!!!!

  constructor(id, nome, cognome, eta, contatti) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.contatti = contatti;
    //this.logger.log('LOG CLASSE PERSONA = '+ this);
  }
}
