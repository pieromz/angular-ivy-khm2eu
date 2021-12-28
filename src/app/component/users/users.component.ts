import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  footerTable = 'Footer table utenti';
  public users: Array<User> = [];

  public dataOdierna: Date = new Date();
  private subscription: Subscription = new Subscription();
  public stringProva: string = 'prova piero';

  @Output('onUpdateUser') userModifica = new EventEmitter(); //esplicitare un evento che verrà catturato dal padre

  @Input('user-selected') utenteSelezionato: boolean | undefined;

  constructor(private service: UserService, private routeNavigate: Router) {}
  ngOnInit(): void {
    /*this.users = this.service.getUsers().subscribe((res) => {
      this.users = res['data'];
    });*/

    this.service.getUsers().subscribe((res) => {
      this.users = res['data'];
    });

    this.dataOdierna = new Date();
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

  /*INIZIO AGGIORNAMENTO DATA*/

  refreshData() {
    this.dataOdierna = new Date();
  }

  addNuovoCliente() {
    this.routeNavigate.navigateByUrl('/users/new');
  }

  /*FINE AGGIORNAMENTO DATA*/
}
