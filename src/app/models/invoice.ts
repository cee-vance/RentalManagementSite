import { Job } from "./job";

export class Invoice {
    /*
        An invoice for a specific job, includes the totals for all the equipment rented for 
        associated Job , also dates
    */
    public id: any = '';
    
    public invoice_date: any = '';
    public rental_period: any  = '';
    public  invoice_amount: any = '';
    public job:any = '';
}
