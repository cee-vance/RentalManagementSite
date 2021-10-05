import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Job } from '../models/job';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../models/http-error-handler';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  /*
    this Service interacts with backend Rental Management api to 
    perform CRUD operations on Job, 
    !!!!!!!!!!! TO DO: !!!!!!!!!!!!!!!!!!
    implement Authorization , Authentication
    inject AuthService for Authentication
    */

    // Will probably change
    private _url: string = 'http://localhost:8000/jobs/';
    private _url_add: string = 'http://localhost:8000/job/create/'
    private _url_single: string = 'http://localhost:8000/job/'
    
   constructor(private http: HttpClient) { }

  // Gets all jobs
  // Only needs Authentication i.e. Users and admins can see all the vendors
  getJobs(): Observable<Job[]>{
    return  this.http.get<Job[]>(this._url).pipe(catchError(HttpErrorHandler.errorHandler));
  }

  // Get job by id 
  // returns only the job with passed id
  // Only need Authentication i.e Users and admins can see all the vendors
  
  getJobById(id:number): Observable<Job[]>{
    return this.http.get<Job[]>(this._url_single + id + '/').pipe(catchError(HttpErrorHandler.errorHandler));
    } 

    // Update job with id, set to passed job object
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    updateJob(id:number, job:Job):Observable<Job>{
      return this.http.put<Job>(this._url_single + id +'/', job).pipe(catchError(HttpErrorHandler.errorHandler));
    }

    // Delete job with id
    // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    deleteJob(id:number){
      return this.http.delete(this._url + id+'/').pipe(catchError(HttpErrorHandler.errorHandler));
    }
      
    // Create job record
    // returns an array of all the vendors
        // Needs Authorization ( Admins only)
    // Needs Authentication ( Logged in Admins)
    createJob(job:Job):Observable<Job[]>{
      console.log('calling create job');
      console.log(job.name + job.needed_from + job.needed_to);
      return this.http.post<Job[]>(this._url_add, job).pipe(catchError(HttpErrorHandler.errorHandler));
      
    }

}
