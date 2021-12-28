import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  dettaglioUtente: User;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private routeNavigate: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dettaglioUtente = this.service.getUserById(+params.id); //+ implica il cast a number
    });
  }
}
