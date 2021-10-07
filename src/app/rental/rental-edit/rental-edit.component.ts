import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { EquipmentService } from 'src/app/services/equipment.service';
import { RentalService } from 'src/app/services/rental.service';
import { VendorService } from 'src/app/services/vendor.service';


@Component({
  selector: 'app-rental-edit',
  templateUrl: './rental-edit.component.html',
  styleUrls: ['./rental-edit.component.css']
})
export class RentalEditComponent implements OnInit {
  rentals:any;
  vendors:any;
  equipments:any;
  rental:Rental = new Rental();
  errorMsg:any = '';
  equipment_ids:number[] = [];
//  @Output() notify: EventEmitter<number> = new EventEmitter();
  constructor(private rental_srvc: RentalService, private equipment_srvc:EquipmentService, private vendor_srvc: VendorService, private activeRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.equipment_srvc.getEquipment().subscribe(
      (data) => this.equipments = data,
      (error) => this.errorMsg = error
    )

    this.vendor_srvc.getVendors().subscribe(
      (data) => this.vendors = data,
      (error) => this.errorMsg = error
    )
    console.log("Run the getId");
    this.getId()
  }
  getId(){
    if(this.activeRoute.snapshot.params['id']){
      this.rental_srvc.getRentalById( this.activeRoute.snapshot.params['id']).subscribe(
        (data) => this.rental = data,
        (error) => this.errorMsg = error
      )}
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
        this.rental.vendor_id = this.rental.vendor_id;
        this.rental.equipment_id = this.equipment_ids;
        console.log('vendor id:' + this.rental.vendor_id);
        console.log('equipment ids' + this.rental.equipment_id);
        console.log('receive time:' + this.rental.receive_time);
        console.log('return time:' + this.rental.return_time);

          this.rental.buy_rent = true;

          this.rental_srvc.updateRental(this.rental.id,this.rental).subscribe(
            (data) => this.rental = data,
            (error) => this.errorMsg = error
          )
            this.router.navigate(['/Rental']);

      }
      onDelete(id:any){
        console.log('id' + this.rental.id);
        this.equipment_srvc.deleteEquipment(this.rental.id).subscribe(
          (data)=> this.rentals = data,
          (error) => this.errorMsg = error);
          this.router.navigate(['/Rental']);
      };

}


