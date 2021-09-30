export interface Rental {
    id: number;
    equipment_id:number;
    vendor_id: number;
    receive_date:string;
    receive_hours: number;
    return_hours: number;
    rental_rate: number;
    buy_rent: boolean;
}
