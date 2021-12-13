import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GlobalConstants } from '../global/constants';

@Injectable()
export class LogService {
  log(msg: any) {
    var dataOggi = new Date();

    var dataOggiString = this.datePipe.transform(
      dataOggi,
      GlobalConstants.formatDateToLog
    );
    console.log(dataOggiString + ': ' + JSON.stringify(msg));
  }

  constructor(private datePipe: DatePipe) {}
}
