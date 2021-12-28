import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output('onClickNewUser') addNewUser = new EventEmitter(); //esplicitare un evento che verrà catturato dal padre

  constructor() {}
  ngOnInit(): void {}

  addNewUserClick(): void {
    this.addNewUser.emit();
  }
}
