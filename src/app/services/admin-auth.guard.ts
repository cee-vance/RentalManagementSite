import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private auth_srvc: AuthServiceService){}
  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.auth_srvc.isAdmin)
            return true;
      return false;
  }
  
}
