import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnChanges {
  //@Input('user-selected') utenteSelezionato: boolean | undefined;
  //@Input('utente-da-modificare') utenteForm: User;

  public utenteSelezionato: boolean | undefined;
  public utenteForm: User;

  public utenti: Array<User> = [];

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private routeNavigate: Router
  ) {}

  ngOnInit() {
    this.utenti = this.service.getUsers();
    this.route.params.subscribe((params) => {
      if (params.id != undefined && params.id != null) {
        this.utenteForm = this.service.getUserById(+params.id); //+ implica il cast a number
      } else {
        this.utenteForm = this.service.getUtenteBasePerInserimento();
      }
    });
  }

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
      this.utenti = this.service.getUsers();
      this.routeNavigate.navigateByUrl('/users');
    } else {
      this.modificaUtente();
      this.utenteForm = new User();
    }
  }

  modificaUtente() {
    this.service.updateUser(this.utenteForm);
  }

  tornaHomePage() {
    this.routeNavigate.navigateByUrl('/users');
  }
}
