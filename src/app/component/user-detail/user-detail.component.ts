import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from '../class/user';
import { UserInterface } from '../model/userInterface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input('user-selected') utenteSelezionato: boolean | undefined;
  @Input('utente-da-modificare') utenteForm: User;

  public testoProva: string;

  constructor() {
    this.utenteForm = new User();
  }

  ngOnInit() {}

  annullaModificaUtente() {
    this.svuotaCampiForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PMZ - ' + JSON.stringify(changes));
  }

  svuotaCampiForm() {
    this.utenteForm.id = undefined;
    this.utenteForm.nome = '';
    this.utenteForm.cognome = '';
    this.utenteForm.cf = '';
    this.utenteForm.email = '';
    this.utenteForm.telefono = '';
    this.utenteForm.comune = '';
    this.utenteForm.eta = undefined;
  }

  salvaUtente() {
    alert(this.utenteForm.id);
  }
}
