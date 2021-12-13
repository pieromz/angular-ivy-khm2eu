import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users: any = [
    {
      id: 1,
      nome: 'PIERO',
      cognome: 'MARTUCCI ZECCA',
      cf: 'MRTPRI91T29F262E',
      email: 'piero@gmail.com',
      telefono: '3427566914',
      comune: 'Modugno',
      eta: 29,
    },
    {
      id: 2,
      nome: 'MARIA',
      cognome: 'FANELLI',
      cf: 'MARIAFANELLICF',
      email: 'fanelli@gmail.com',
      telefono: '1231231231',
      comune: 'Grumo appula',
      eta: 30,
    },
    {
      id: 3,
      nome: 'FRANCESCO',
      cognome: 'RICCI',
      cf: 'ABCDEFGHILMNOPQRST',
      email: 'ricci.francesco@libero.it',
      telefono: '0805325662',
      comune: 'Roma',
      eta: 72,
    },
  ];

  getUsers() {
    return this.users;
  }

  cancellaUtente(utente: any): void {
    const indiceDaEliminare = this.users.indexOf(utente);
    if (indiceDaEliminare >= 0) {
      this.users.splice(indiceDaEliminare, 0);
    } else {
      alert('UTENTE NON PRESENTE!!!');
    }
  }

  constructor() {}
}
