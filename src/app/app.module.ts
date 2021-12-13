import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*import { FormsModule } from '@angular/forms';*/
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//COMPONENTI
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabellaComponent } from './component/tabella';
import { AlertComponent } from './component/alert';
import { FormComponent } from './component/form';
import { UsersComponent } from './component/users/users.component';

//SERVIZI
import { LogService } from './shared/log.service';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, NgbModule, CommonModule],
  declarations: [
    //INSERIAMO I COMPONENTI CHE CREAMO TUTTI QUI DENTRO
    AppComponent,
    HelloComponent,
    TabellaComponent,
    AlertComponent,
    FormComponent,
    UsersComponent,
  ],
  bootstrap: [AppComponent], //MODULO DI INGRESSO, MODULO RADICE
  providers: [LogService, DatePipe],
})
export class AppModule {}
