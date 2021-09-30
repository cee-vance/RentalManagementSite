import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Equipment } from '../models/equipment';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../models/http-error-handler';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  /*
    this Service interacts with backend Rental Management api to 
    perform CRUD operations on Equipment, 
    !!!!!!!!!!! TO DO: !!!!!!!!!!!!!!!!!!
    implement frontend Authorization,  See AuthService
  */
  private _url: string = "http://localhost:8000/equipment/";
  constructor(private http: HttpClient) {

   }
   // Get all the entries in Equipment
   getEquipment(): Observable<Equipment[]>{
     return this.http.get<Equipment[]>(this._url).pipe(
       catchError(HttpErrorHandler.errorHandler)
     );
   }
   // Get Specific Equipment by pk
   getEquipmentById( id:number) :Observable<Equipment>{
      return this.http.get<Equipment>(this._url + id).pipe(catchError(HttpErrorHandler.errorHandler));

   }

   // Requires Authorization
   // Updates an Equipment 
   updateEquipment(id:number, equipment: Equipment): Observable<Equipment[]>{
     return this.http.put<Equipment[]>(this._url + id, equipment).pipe(catchError(HttpErrorHandler.errorHandler));
   }

   // Requires Authorization
   // Delete an Equipment
   deleteEquipment(id: number): Observable<Equipment[]>{
      return this.http.delete<Equipment[]>(this._url + id).pipe(catchError(HttpErrorHandler.errorHandler));
   }







}
