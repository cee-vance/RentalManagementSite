import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Rental } from '../models/rental';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../models/http-error-handler';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

   /*
    this Service interacts with backend Rental Management api to 
    perform CRUD operations on Rental, 
    !!!!!!!!!!! TO DO: !!!!!!!!!!!!!!!!!!
    implement Authorization , Authentication
    inject AuthService for Authentication
    */

    // Will probably change
    private _url: string = 'localhost:8000/rentals/';
   constructor(private http: HttpClient) { }

  // Gets all rentals
  // Only needs Authentication i.e. Users and admins can see all the vendors
  getRentals(): Observable<Rental[]>{
    return  this.http.get<Rental[]>(this._url).pipe(catchError(HttpErrorHandler.errorHandler));
  }

  // Get rental by id 
  // returns only the rental with passed id
  // Only need Authentication i.e Users and admins can see all the vendors
  
  getRentalById(id:number): Observable<Rental>{
    return this.http.get<Rental>(this._url+ id).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Update rental with id, set to passed rental object
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    updateVendor(id:number, rental:Rental):Observable<Rental>{
      return this.http.put<Rental>(this._url + id, rental).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Delete rental with id
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    deleteRental(id:number){
      return this.http.delete(this._url + id).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Create rental record
    // returns an array of all the rentals
        // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    createRental(rental:Rental):Observable<Rental[]>{
      return this.http.post<Rental[]>(this._url, rental).pipe(catchError(HttpErrorHandler.errorHandler));

    }

}
