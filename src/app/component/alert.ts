import { Component, Input } from '@angular/core';
import { Alert } from '../obj/alertObj';
import { GlobalConstants } from '../global/constants';

const ALERTS = [
  {
    type: 'success',
    message: 'This is an success alert',
  },
  {
    type: 'info',
    message: 'This is an info alert',
  },
  {
    type: 'warning',
    message: 'This is a warning alert',
  },
  {
    type: 'danger',
    message: 'This is a danger alert',
  },
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
  {
    type: 'secondary',
    message: 'This is a secondary alert',
  },
  {
    type: 'light',
    message: 'This is a light alert',
  },
  {
    type: 'dark',
    message: 'This is a dark alert',
  },
];

@Component({
  selector: 'alert',
  templateUrl: './alert.html',
})
export class AlertComponent {
  @Input() avvisi: Array<Alert>;

  erroriList: Array<Alert>;

  constructor() {
    this.impostaAlertDefault();
    this.erroriList = GlobalConstants.errori;
  }

  close(alert: Alert) {
    this.avvisi.splice(this.avvisi.indexOf(alert), 1);
  }

  closeGlobalAlert(alert: Alert) {
    this.erroriList.splice(this.avvisi.indexOf(alert), 1);
  }

  impostaAlertDefault() {
    //this.avvisi = ALERTS;
    this.avvisi = [];
  }

  aggiungiAlert(t: string, m: string) {
    var element = new Alert(t, m);
    this.avvisi.push(element);
  }
}
