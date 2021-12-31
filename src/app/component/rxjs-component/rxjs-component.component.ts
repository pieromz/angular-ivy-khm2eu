import { Component, OnInit } from '@angular/core';

import { Observable, of, pipe, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs-component.component.html',
  styleUrls: ['./rxjs-component.component.css'],
})
export class RxjsComponentComponent implements OnInit {
  valore: Array<number> = [];

  constructor() {}

  ngOnInit() {
    console.log(
      '*****************INIZIO RXJS FUNZIONI IN CONSOLE******************'
    );

    console.log('*****************PRIMA FUNZIONE RXJS "of" ******************');
    const nums = of(1, 2, 3, 4, 5);

    // Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map((n) => n * n)
    );

    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

    // Subscribe to run the combined functions
    squareOdd.subscribe((x) => {
      console.log(x);
      this.valore.push(x);
    });

    //FUNZIONE RANGE
    console.log(
      '*****************SECONDA FUNZIONE RXJS "range" ******************'
    );
    range(1, 10)
      .pipe(
        filter((x) => x % 2 === 0),
        map((x) => x * x)
      )
      .subscribe((x) => console.log(x));

    console.log(
      '*****************FINE RXJS FUNZIONI IN CONSOLE******************'
    );

    console.error(
      '*****************INIZIO RXJS OBSERVABLE IN CONSOLE******************'
    );

    //next --> PROSSIMO VALORE CHE L'OSSERVATORE RICEVERA'
    //Error -->
    //complete -->

    //Observable --> finche non viene chiamato, questi valori non vengono emessi
    const objs = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);

      setTimeout(() => {
        subscriber.next(4);
      }, 4000);

      //subscriber.complete();
      //subscriber.error();
      subscriber.next(3); //non gestito nel subscribe se dopo completed
    }); //istanzio Observable

    objs.subscribe(
      (v) => {
        console.log('0 - value ' + v);
      },
      (error) => {
        console.error('0 - something wrong occurred: ' + error);
      },
      () => {
        console.log('0 - values completed');
      }
    );

    //gestione subscribe non deprecata
    objs.subscribe({
      next(x) {
        console.log('1 - value ' + x);
      },
      error(err) {
        console.error('1 - something wrong occurred: ' + err);
      },
      complete() {
        console.log('1 - values completed');
      },
    });

    objs.subscribe({
      next: (x) => console.log('2 - value ' + x),
      error: (err) => console.error('2 - something wrong occurred: ' + err),
      complete: () => console.log('2 - values completed'),
    });

    console.error(
      '*****************FINE RXJS OBSERVABLE IN CONSOLE******************'
    );

    /*
Nel caso in cui vogliate gestire non solo i valori emessi ma anche error e complete, meglio passare un oggetto observer fatto così, come vedremo nella prossima lezione:

observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
che usa la sintassi corta di proprietà valore. La sintassi lunga sarebbe:

observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err =>  console.error('something wrong occurred: ' + err),
  complete: () =>  console.log('done')
});
*/
  }
}
