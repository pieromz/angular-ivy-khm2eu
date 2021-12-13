import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'tr[app-user]', //NOTA BENE PER UTILIZZARE LA COMPONENTE COME ATTRRIBUTO DEL TAG "TR"
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: any; //DEFINITO PER RICEVERE I PARAMETRI DAL COMPONENT PADRE!
  constructor(private service: UserService) {}

  ngOnInit() {}

  eliminaUtente(user: any): void {
    alert('ELIMINARE UTENTE = ' + user.nome + '?');
    this.service.cancellaUtente(user);
  }
}
