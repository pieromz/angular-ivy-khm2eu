import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-user]', //NOTA BENE PER UTILIZZARE LA COMPONENTE COME ATTRRIBUTO DEL TAG "TR"
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: any;
  constructor() {}

  ngOnInit() {}
}
