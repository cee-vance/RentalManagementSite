import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { EquipmentService } from 'src/app/services/equipment.service';
import { RentalService } from 'src/app/services/rental.service';
import { VendorService } from 'src/app/services/vendor.service';
@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {
  /*
    This component adds a new Rental using the api and RentalService,
    Admin has the ability to select the Equipment(s) that are associated with this
    rental and to assign the Vendor from which the Rental is made, 
    receive & return dates are input along with , rental_rate , and buy_rent which 
    by default is true= rent
  */
  rentals:any;
  vendors:any;
  equipments:any;
  rental:Rental = new Rental();
  errorMsg:any;
  equipment_ids:number[] = [];
  constructor(private rental_srvc: RentalService, private equipment_srvc:EquipmentService, private vendor_srvc: VendorService) { }

  ngOnInit(): void {
    this.equipment_srvc.getEquipment().subscribe(
      (data) => this.equipments = data,
      (error) => this.errorMsg = error
    )

    this.vendor_srvc.getVendors().subscribe(
      (data) => this.vendors = data,
      (error) => this.errorMsg = error
    )
  }

  picker1_changed($event:any){
      
    let d = new Date($event.target.value);
    
    console.log(d.toLocaleDateString('en-ca'));
    this.rental.receive_time = d.toLocaleDateString('en-ca');
  }

  picker2_changed($event:any){
   
    
    let d = new Date($event.target.value);
    
    console.log(d.toLocaleDateString('en-ca'));
    this.rental.return_time = d.toLocaleDateString('en-ca');
  }

          // Only Integer Numbers
          keyPressNumbers(event:any) {
            var charCode = (event.which) ? event.which : event.keyCode;
            // Only Numbers 0-9
            if ((charCode < 48 || charCode > 57)) {
              event.preventDefault();
              return false;
            } else {
              return true;
            }
          }

      // Submits the new Rental
      onSubmit(rentalForm:any){
        //console.log(this.equipment_ids);
        this.rental.vendor_id = this.rental.vendor_id[0];
        this.rental.equipment_id = this.equipment_ids;
        console.log('vendor id:' + this.rental.vendor_id);
        console.log('equipment ids' + this.rental.equipment_id);
        console.log('receive time:' + this.rental.receive_time);
          this.rental.buy_rent = true;

          this.rental_srvc.createRental(this.rental).subscribe(
            (data) => this.rentals = data,
            (error) => this.errorMsg = error
          )

      }

}
