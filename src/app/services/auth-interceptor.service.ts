import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth_srvc: AuthServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   /*   let hdrs = this.auth_srvc.getAuthHeader();

      if(hdrs){
          const cloned = req.clone({ headers:hdrs});
          return next.handle(cloned);
      }else{
       return next.handle(req);
      }   */

      console.log(req.url);
      if( this.auth_srvc.isLoggedIn){
      let hdrs = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access'));

      hdrs.set('Content-Type',' application/json');
        const cloned = req.clone({ headers:hdrs});
        return next.handle(cloned);
      }else{
        return next.handle(req);
      }
     
     
  }
}
