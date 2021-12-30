import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from '@angular/common';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
//COMPONENTI
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { TabellaComponent } from './component/tabella';
import { AlertComponent } from './component/alert';
import { FormComponent } from './component/form';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RoutingModuleModule } from './routing-module.module';

//SERVIZI
import { LogService } from './shared/log.service';
import { DatePipe } from '@angular/common';
import { UserService } from './component/services/user.service';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //AppRoutingModule,
    HttpClientModule,
    RoutingModuleModule,
    NgbModule,
  ],
  declarations: [
    //INSERIAMO I COMPONENTI CHE CREAMO TUTTI QUI DENTRO
    AppComponent,
    MainComponent,
    TabellaComponent,
    AlertComponent,
    FormComponent,
    UserComponent,
    UsersComponent,
    UserDetailComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent], //MODULO DI INGRESSO, MODULO RADICE
  providers: [LogService, DatePipe, UserService],
})
export class AppModule {}
