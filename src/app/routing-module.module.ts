import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './component/users/users.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { UserDataComponent } from './component/user-data/user-data.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './component/services/route-guard.service';

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
    canActivate: [RouteGuardService], //PROTEZIONE ROTTA
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
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
  providers: [RouteGuardService],
})
export class RoutingModuleModule {}
