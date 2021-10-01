export interface Job {
    /*
    represents a Construction Job that lasts from - to date, 
    can have many different Rentals for each Job
    */
    id:number;
    name:string;
    needed_from: string;
    needed_to: string;
    rentals:any;
    /*
        TO DO:
        ADD FIELD FOR LIST OF RENTALS ASSOCIATED WITH JOB !!!!
    */
  //  PO: number;
}
