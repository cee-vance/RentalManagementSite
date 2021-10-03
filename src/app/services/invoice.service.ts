import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Invoice } from '../models/invoice';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../models/http-error-handler';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  /*
    this Service interacts with backend Rental Management api to 
    perform CRUD operations on Invoices, 
    !!!!!!!!!!! TO DO: !!!!!!!!!!!!!!!!!!
    implement Authorization , Authentication
    inject AuthService for Authentication
    */

    // Will probably change
    private _url: string = 'http://localhost:8000/invoices/';
    private _url_single: string = 'http://localhost:8000/invoice/';
   constructor(private http: HttpClient) { }

  // Gets all invoices
  // Only needs Authentication i.e. Users and admins can see all the vendors
  getInvoices(): Observable<Invoice[]>{
    return  this.http.get<Invoice[]>(this._url).pipe(catchError(HttpErrorHandler.errorHandler));
  }

  // Get invoice by id 
  // returns only the invoice with passed id
  // Only need Authentication i.e Users and admins can see all the vendors
  
  getInvoiceById(id:number): Observable<Invoice>{
    return this.http.get<Invoice>(this._url+ id).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Update invoice with id, set to passed invoice object
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    updateInvoice(id:number, invoice:Invoice):Observable<Invoice>{
      return this.http.put<Invoice>(this._url + id, invoice).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Delete invoice with id
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    deleteInvoice(id:number){
      return this.http.delete(this._url + id).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Create invoice record
    // returns an array of all the invoices
        // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    createInvoice(invoice:Invoice):Observable<Invoice>{
      return this.http.post<Invoice>(this._url_single +'create/', invoice).pipe(catchError(HttpErrorHandler.errorHandler));

    }
}
