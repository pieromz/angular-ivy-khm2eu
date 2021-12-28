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

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private routeNavigate: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id != undefined && params.id != null) {
        //this.utenteForm = this.service.getUserById(+params.id); //+ implica il cast a number

        this.service.getUserById(params.id).subscribe((res) => {
          this.utenteForm = res.data;
        });
      } else {
        this.utenteForm = this.service.getUtenteBasePerInserimento();
      }
    });
  }

  annullaModificaUtente(form) {
    this.routeNavigate.navigateByUrl('/users');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PMZ - ' + JSON.stringify(changes));
  }

  svuotaCampiForm(form) {
    this.utenteForm = this.service.getUtenteBasePerInserimento();
    form.reset();
  }

  salvaUtente() {
    if (this.utenteForm.id == undefined) {
      this.service.insertUser(this.utenteForm);
      this.utenteForm = new User();
      this.routeNavigate.navigateByUrl('/users');
    } else {
      this.modificaUtente();
      this.utenteForm = new User();
    }
  }

  modificaUtente() {
    //this.service.updateUser(this.utenteForm);

    this.service.updateUser(this.utenteForm).subscribe((res) => {
      if (res.success) {
        console.log(res.message);
        this.tornaHomePage();
      } else {
        console.error(res.message);
      }
    });
  }

  tornaHomePage() {
    this.routeNavigate.navigateByUrl('/users');
  }
}
