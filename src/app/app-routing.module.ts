import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { UsersComponent } from './component/users/users.component';
import { UserDataComponent } from './component/user-data/user-data.component';

import { FormsModule } from '@angular/forms';
import { UserService } from './component/services/user.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full', //coincide perfettamente con la stringa "users"
    component: UsersComponent,
  },
  {
    path: '', //url vuoto va sul componente UsersComponent, OSSIA REDIRIGE A 'users'
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
  },
  {
    path: 'users/:id',
    component: UserDataComponent,
  },
];

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    UserDataComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [UserService],
})
export class AppRoutingModule {}
