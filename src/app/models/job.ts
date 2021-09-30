export interface Job {
    /*
    represents a Construction Job that lasts from - to date, 
    can have many different Rentals for each Job
    */
    id:number;
    needed_from: string;
    needed_to: string;
    PO: number;
}
