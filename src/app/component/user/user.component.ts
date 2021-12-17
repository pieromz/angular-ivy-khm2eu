import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]', //NOTA BENE PER UTILIZZARE LA COMPONENTE COME ATTRRIBUTO DEL TAG "TR"
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User | undefined; //DEFINITO PER RICEVERE I PARAMETRI DAL COMPONENT PADRE!

  @Output('onDeleteUser') userDeleted = new EventEmitter(); //esplicitare un evento che verrà catturato dal padre
  @Output('onUpdateUser') userModifica = new EventEmitter(); //esplicitare un evento che verrà catturato dal padre
  constructor(private service: UserService) {}

  ngOnInit() {}

  eliminaUtente(user: User): void {
    //alert('ELIMINARE UTENTE = ' + user.nome + '?');
    //this.service.cancellaUtente(user);
    var oggettoPerEmit = {
      utente: user,
      nomeUtente: user.nome,
    };
    this.userDeleted.emit(oggettoPerEmit);
  }

  modificaUtente(user: User): void {
    var oggettoPerEmit = {
      utente: user,
      nomeUtente: user.nome,
    };
    this.userModifica.emit(oggettoPerEmit);
  }
}
