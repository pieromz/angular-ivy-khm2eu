import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service: UserService, private route: Router) {}

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
    //accedi alla pagina
    //this.route.navigateByUrl('/users/' + user?.id + '/edit');  //METODO ALTERNATIVO
    this.route.navigate(['users', user?.id, 'edit']); //OPZIONALE ALLA RIGA SOPRA
    /*
    var oggettoPerEmit = {
      utente: user,
      nomeUtente: user.nome,
    };
    this.userModifica.emit(oggettoPerEmit);
    */
  }
}
