import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../class/user';
import { UserInterface } from '../model/userInterface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  footerTable = 'Footer table utenti';
  public users: Array<User> = [];

  @Output('onUpdateUser') userModifica = new EventEmitter(); //esplicitare un evento che verrà catturato dal padre

  @Input('user-selected') utenteSelezionato: boolean | undefined;

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

  modificaUtenteDaComponenteFiglio(oggettoPerEmit: any): void {
    //ATTENZIONE! effettuo una copia dell'oggetto
    const userCopy = Object.assign({}, oggettoPerEmit.utente);
    this.userModifica.emit(userCopy);
  }

  addUtenteBase(): void {
    this.service.addUtenteBase();
  }
}
