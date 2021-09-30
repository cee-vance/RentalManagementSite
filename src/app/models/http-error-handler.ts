import { catchError } from 'rxjs/operators';
import {HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export class HttpErrorHandler {


         // Error handler for HTTP Methods
       static  errorHandler(error:HttpErrorResponse){
            return throwError(error.message || "Server Error");
          }
}
