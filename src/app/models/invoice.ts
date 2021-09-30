export interface Invoice {
    /*
        An invoice for a specific job, includes the totals for all the equipment rented for 
        associated Job , also dates
    */
    id: number;
    job_id:number;
    invoice_date: string;
    rental_period: string;
    invoice_amount: number;
}
