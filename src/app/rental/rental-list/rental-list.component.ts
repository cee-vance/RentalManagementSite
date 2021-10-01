import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  /*
  RentalListComponent uses RentalService to get a list
  of all the rentals and displays them in a table
  */
  constructor(private rental_srvc: RentalService) { }
  rentals: any;
  errorMsg: any;
  displayedColumns: string[] = ['id', 'equipment_id', 'vendor_id', 'receive_time', 'return_time', 'rental_rate', 'buy_rent'];
  ngOnInit(): void {  
    this.rental_srvc.getRentals().subscribe(
      (data) => this.rentals = data,
      (error) => this.errorMsg = error
    ) 

  }
}
