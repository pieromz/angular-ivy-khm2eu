import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input('user-selected') utenteSelezionato: boolean | undefined;
  @Input('utente-da-modificare') utenteForm: User | undefined;

  public testoProva: string;

  constructor() {}

  ngOnInit() {}

  annullaModificaUtente() {
    this.utenteSelezionato = false;
  }
}
