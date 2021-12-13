import { Component } from '@angular/core';
//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-persona',
  templateUrl: './form.html',
  styleUrls: ['../global/global.css'],
})
export class FormComponent {
  /*
  checkoutForm = this.formBuilder.group({
    nome: '',
    cognome: '',
    eta: 0,
    contatto: null,
  });
  */

  constructor(/*private formBuilder: FormBuilder*/) {}

  onSubmit(): void {
    alert('CIAO!');
    /*
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    */
  }

  salvaPersona(): void {
    console.warn('CIAO!');
    /*
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    */
  }
}
