import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _url_login = 'http://localhost:8000/api/token/';
  constructor(private http: HttpClient) { }

  getToken(user:string, pw:string){
      this.http.post<any>(this._url_login, { user, pw});
  }
}
