import { Component, VERSION } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vAngular = 'Angular ' + VERSION.major;

  constructor(private titleService: Title) {
    this.titleService.setTitle('APP DI PIERO');
  }
}
