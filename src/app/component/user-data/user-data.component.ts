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
    /* this.route.params può essere deprecato, meglio la soluzione sotto: this.route.paramMap
    this.route.params.subscribe((params) => {
      this.service.getUserById(+params.id).subscribe((res) => {
        this.dettaglioUtente = res.data;
      });

      //this.dettaglioUtente = this.service.getUserById(+params.id); //+ implica il cast a number
    });
    */

    this.route.paramMap.subscribe((params) => {
      this.service.getUserById(+params.get('id')).subscribe((res) => {
        this.dettaglioUtente = res.data;
      });
    });
  }

  tornaHomePage() {
    this.routeNavigate.navigateByUrl('/users');
  }
}
