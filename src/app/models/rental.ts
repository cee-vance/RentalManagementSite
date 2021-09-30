export interface Rental {
    /*
    Represents  a single piece of Equipment , Rented from a vendor 
    
    */
    id: number;
    equipment_id:number;
    vendor_id: number;
    receive_date:string;
    receive_hours: number;
    return_hours: number;
    rental_rate: number;
    buy_rent: boolean;
}
