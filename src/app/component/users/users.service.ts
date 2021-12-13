import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUsers() {
    return [
      {
        nome: 'PIERO',
        cognome: 'MARTUCCI ZECCA',
        cf: 'MRTPRI91T29F262E',
        email: 'piero@gmail.com',
        telefono: '3427566914',
        provincia: 'Modugno',
        eta: 29,
      },
      {
        nome: 'MARIA',
        cognome: 'FANELLI',
        cf: 'MARIAFANELLICF',
        email: 'fanelli@gmail.com',
        telefono: '1231231231',
        provincia: 'Grumo appula',
        eta: 30,
      },
      {
        nome: 'FRANCESCO',
        cognome: 'RICCI',
        cf: 'ABCDEFGHILMNOPQRST',
        email: 'ricci.francesco@libero.it',
        telefono: '0805325662',
        provincia: 'Roma',
        eta: 72,
      },
    ];
  }

  constructor() {}
}
