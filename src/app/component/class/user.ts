import { UserInterface } from '../model/userInterface';

export class User implements UserInterface {
  id: number;
  nome: string;
  cognome: string;
  cf: string;
  email: string;
  telefono: string;
  comune: string;
  eta: number;

  constructor(){
    this.id = undefined;
    this.nome = '';
    this.cognome = '';
    this.cf = '';
    this.email = '';
    this.telefono = '';
    this.comune = '';
    this.eta = undefined;
  }
}
