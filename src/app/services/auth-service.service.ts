import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Credentials } from '../models/credentials';
import { Rental } from '../models/rental';
//import { ResponseContentType } from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
   username: string | undefined;
  
   private creds: any;
  private errorMsg:any;
  private info: string ='';
   isAdmin: boolean = false;
  isLoggedIn: boolean  = false;

  private _url_login = 'http://localhost:8000/login';
  private get_init_token_url = 'http://localhost:8000/api/token/';
  private acc_token: string| null = ''
  constructor(private http: HttpClient) { }


    public login(username:string, pw:string):boolean{
      let body = {"username":username, "password": pw};

      this.http.post<any>(this.get_init_token_url, body).subscribe(
        (token) => {
          localStorage.setItem('access', token["access"]),
          localStorage.setItem('refresh', token["refresh"])
          this.acc_token = token['access']

        }
      );
      // check to make sure we received info to authenticate in future
      if( localStorage.getItem('access') == ''){
            console.log('credentials were not right');
            return false;
      }
      if(this.checkCreds())
          this.isAdmin = true;
      else  
          this.isAdmin = false;
      console.log('isAdmin' + this.isAdmin);
      this.isLoggedIn = true;
      this.username = username;
      
     return true;

    }



   private checkCreds():boolean{
      

      let hdrs = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access'));

      hdrs.set('Content-Type','application/json');

        this.http.get(this._url_login,{headers:hdrs} ).subscribe( 
          (data) => 
                this.creds = data,
                (error) => this.errorMsg      
          
        )

       //   console.log(this.errorMsg);

          
            
          // if user is found
        // set logged in to true etc.

        console.log(this.creds.user);
        console.log(this.creds.auth);
        
         if ( this.creds.auth == 'True'){
              this.isAdmin = true;
              console.log('is admin');
        
          return true;
        }
        // perform the logic for service
        // check if creds were not accepted
        else{
          console.log('creds.details == true');
          
          return false;
        }

        
      

        return false;
    }

    logout(){
        // Logs current user out
        this.username = '';
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.creds = null;

    }

    getIsLoggedIn(): Observable<boolean>{
      return of(this.isLoggedIn);

    }


}
