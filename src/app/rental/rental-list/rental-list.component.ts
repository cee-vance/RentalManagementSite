import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
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
  constructor(private rental_srvc: RentalService,private router: Router,public auth_srvc: AuthServiceService) { }
  rentals: any;
  errorMsg: any;
  displayedColumns: string[] = ['id', 'equipment_id', 'vendor_id', 'receive_time', 'return_time', 'rental_rate', 'buy_rent','edit'];
  ngOnInit(): void {  
    this.rental_srvc.getRentals().subscribe(
      (data) => this.rentals = data,
      (error) => this.errorMsg = error
    ) 

  }

  updateList(n:any){
    this.rental_srvc.getRentals().subscribe(
      (data) => this.rentals = data,
      (error) => this.errorMsg = error
    ) 
  }
  showEdit(id:number){
    console.log('id:' + id);
    this.router.navigateByUrl('', {skipLocationChange:true}).then(() => {
    this.router.navigate(['Rental/RentalEdit/', id] );
      });

  } 
}
