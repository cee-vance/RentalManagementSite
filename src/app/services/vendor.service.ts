import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Vendor } from '../models/vendor';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../models/http-error-handler';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
   /*
    this Service interacts with backend Rental Management api to 
    perform CRUD operations on Vendor, 
    !!!!!!!!!!! TO DO: !!!!!!!!!!!!!!!!!!
    implement Authorization , Authentication
    inject AuthService for Authentication
    */

    // Will probably change
    private _url: string = 'http://localhost:8000/api/Vendor';
   constructor(private http: HttpClient) { }

  // Gets all vendors
  // Only needs Authentication i.e. Users and admins can see all the vendors
  getVendors(): Observable<Vendor[]>{
    return  this.http.get<Vendor[]>(this._url).pipe(catchError(HttpErrorHandler.errorHandler));
  }

  // Get vendor by id 
  // returns only the Vendor with passed id
  // Only need Authentication i.e Users and admins can see all the vendors
  
  getVendorById(id:number): Observable<Vendor>{
    return this.http.get<Vendor>(this._url+"/"+ id).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Update vendor with id, set to passed vendor object
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    updateVendor(id:number, vendor:Vendor):Observable<Vendor>{
      return this.http.put<Vendor>(this._url + "/"+id, vendor).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Delete vendor with id
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    deleteVendor(id:number){
      return this.http.delete(this._url +"/"+ id).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Create vendor record
    // returns an array of all the vendors
        // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    createVendor(vendor:Vendor):Observable<Vendor>{
      return this.http.post<Vendor>(this._url, vendor).pipe(catchError(HttpErrorHandler.errorHandler));

    }



  }


 
 


