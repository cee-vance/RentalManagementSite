export interface Equipment {
    /*
        A single piece of equipment , used in Rental,
        can be sorted by category
    */
    id: number;
    category: string;
    make: string;
    model: string;
    serial_no: string;
}
