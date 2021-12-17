import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//COMPONENTI
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { TabellaComponent } from './component/tabella';
import { AlertComponent } from './component/alert';
import { FormComponent } from './component/form';
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
//SERVIZI
import { LogService } from './shared/log.service';
import { DatePipe } from '@angular/common';
import { UserService } from './component/services/user.service';

@NgModule({
  imports: [BrowserModule, NgbModule, CommonModule, FormsModule],
  declarations: [
    //INSERIAMO I COMPONENTI CHE CREAMO TUTTI QUI DENTRO
    AppComponent,
    MainComponent,
    TabellaComponent,
    AlertComponent,
    FormComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
  ],
  bootstrap: [AppComponent], //MODULO DI INGRESSO, MODULO RADICE
  providers: [LogService, DatePipe, UserService],
})
export class AppModule {}
