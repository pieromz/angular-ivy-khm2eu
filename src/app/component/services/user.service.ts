import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

interface UsersResponse {
  data: User[];
  message: string;
  success: boolean;
}

interface UserResponse {
  data: User;
  message: string;
  success: boolean;
}

@Injectable()
export class UserService {
  users: Array<User> = [];
  private ApiUrlUsers = 'http://127.0.0.1:8000/users';

  /*users: Array<User> = [
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
  */

  getUsers() {
    return this.http.get(this.ApiUrlUsers);
    //return this.http.get<UsersResponse>(this.ApiUrlUsers);
  }

  getUserById(id: number) {
    return this.http.get<UserResponse>(this.ApiUrlUsers + '/' + id);
  }

  updateUser(user: User) {
    return this.http.patch<UserResponse>(
      this.ApiUrlUsers + '/' + user.id,
      user
    );
  }

  insertUser(user: User) {
    return this.http.post<UserResponse>(this.ApiUrlUsers, user);
  }

  addUtenteBase() {
    var utenteBase = {
      id: null,
      nome: 'UTENTE',
      cognome: 'BASE',
      cf: 'BASE CF',
      email: 'utente.base@libero.it',
      telefono: '555555555',
      comune: 'Base',
      eta: 99,
    };
    return this.http.post<UserResponse>(this.ApiUrlUsers, utenteBase);
  }

  cancellaUtente(utente: any) {
    return this.http.delete<UserResponse>(this.ApiUrlUsers + '/' + utente.id);
  }

  /*VECCHI SERVIZI STATICI

  getUsers() {
    return this.users;
  }
  
  getUserById(id: number) {
    const idx = this.users.findIndex((v) => v.id == id);
    if (idx >= 0) {
      return this.http.get<UserResponse>(this.ApiUrlUsers + '/' + idx);
      //return this.users[idx];
    } else {
      return null;
    }
  }


  cancellaUtente(utente: any): void {
    const indiceDaEliminare = this.users.indexOf(utente);
    if (indiceDaEliminare >= 0) {
      this.users.splice(indiceDaEliminare, 1);
    } else {
      alert('UTENTE NON PRESENTE!!!');
    }
  }
  
  addUtenteBase(): void {
    var utenteBase = {
      id: this.getNextId(),
      nome: 'UTENTE',
      cognome: 'BASE',
      cf: 'BASE CF',
      email: 'utente.base@libero.it',
      telefono: '555555555',
      comune: 'Base',
      eta: 99,
    };

    this.users.push(utenteBase);
  }

 
  updateUser(user: User) {
    const idx = this.users.findIndex((v) => v.id == user.id);
    if (idx >= 0) {
      this.users[idx] = user;
    } else {
      alert('UTENTE DA MODIFICARE NON PRESENTE!!!');
    }
  }

  insertUser(user: User) {
    user.id = this.getNextId();
    this.users.push(user);
  }
  
  */

  getUtenteBasePerInserimento(): User {
    var utenteBase = {
      id: null,
      nome: '',
      cognome: '',
      cf: '',
      email: '',
      telefono: '',
      comune: '',
      eta: null,
    };
    return utenteBase;
  }

  getNextId(): number {
    var nextId = 0;
    for (var a = 0; a < this.users.length; a++) {
      nextId = this.users[a].id;
    }
    return nextId + 1;
  }

  constructor(private http: HttpClient) {}
}
