import {Rental} from './rental'

export class Job {
    /*
    represents a Construction Job that lasts from - to date, 
    can have many different Rentals for each Job
    */
   public id:any = '';
   public name:string = '';
    public  needed_from: string = '';
   public needed_to: string = '';
   public rentals:any = [];
    /*
        TO DO:
        ADD FIELD FOR LIST OF RENTALS ASSOCIATED WITH JOB !!!!
    */
  //  PO: number;
}
