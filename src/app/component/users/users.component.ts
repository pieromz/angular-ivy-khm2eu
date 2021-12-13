import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  footerTable = 'Footer table utenti';
  public users: Array<User> = [];

  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.users = this.service.getUsers();
    /*if (this.users.length > 0) {
      this.users.splice(0, 1); //rimuovo il primo elemento della lista di utenti se presente almeno un utente
    }*/
  }

  eliminaUtenteDaComponentFiglio(oggettoPerEmit: any): void {
    this.service.cancellaUtente(oggettoPerEmit.utente);
  }

  addUtenteBase(): void {
    this.service.addUtenteBase();
  }
}
