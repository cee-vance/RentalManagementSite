import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
   username: string | undefined;
  
   creds:any;
  private errorMsg:any;
  private info: string ='';
  isAdmin: boolean = false;
  isLoggedIn: boolean  = false;

  private _url_login = 'http://localhost:8000/login';
  constructor(private http: HttpClient) { }


    checkCreds(username:string, pw: string):boolean{
      if( this.username == '' )
          this.isLoggedIn = false;
      // console.log(username +':' + pw);
      let hdrs: HttpHeaders = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + pw)
      })
        this.http.get(this._url_login,{headers:hdrs} ).subscribe( 
          (data) => 
                this.creds = data,
                (error) => this.errorMsg
            

        )



         

          // if user is found
        // set logged in to true etc.
        if( this.creds.user){
          console.log('is user');
          this.username = username;
          this.isLoggedIn = true;
          if ( this.creds.auth == 'True')
              this.isAdmin = true;
              console.log('is admin');
          
          return true;
        }
        // perform the logic for service
        // check if creds were not accepted
        else{
          console.log('creds.details == true');
          this.isLoggedIn = false;
          this.username = '';

          this.info = "Unauthorized"
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
