import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input('user-selected') utenteSelezionato: boolean | undefined;
  @Input('utente-da-modificare') utenteForm: User;

  public testoProva: string;

  constructor(private service: UserService) {
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
    if (this.utenteForm.id == undefined) {
      this.service.insertUser(this.utenteForm);
    } else {
      this.modificaUtente();
    }
  }

  modificaUtente() {
    this.service.updateUser(this.utenteForm);
  }
}
