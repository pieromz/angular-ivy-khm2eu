import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RouteGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //protezione rotta!!!
    return true; //rotta sempre attiva

    //INIZIO SE ATTIVATO QUESTO CODICE, LA ROTTA A CUI ASSOCIATO RouteGuardService conduce alla pagina "users"
    /*this.router.navigate(['users']);
    return false;*/
    //FINE SE ATTIVATO QUESTO CODICE, LA ROTTA A CUI ASSOCIATO RouteGuardService conduce alla pagina "users"
  }
}
