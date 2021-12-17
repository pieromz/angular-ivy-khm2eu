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

  constructor(private service: UserService) {}

  ngOnInit() {}

  annullaModificaUtente(form) {
    this.svuotaCampiForm(form);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PMZ - ' + JSON.stringify(changes));
  }

  svuotaCampiForm(form) {
    form.reset();
  }

  salvaUtente() {
    if (this.utenteForm.id == undefined) {
      this.service.insertUser(this.utenteForm);
      this.utenteForm = new User();
    } else {
      this.modificaUtente();
      this.utenteForm = new User();
    }
  }

  modificaUtente() {
    this.service.updateUser(this.utenteForm);
  }
}
