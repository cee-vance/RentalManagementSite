import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';


@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})




export class VendorAddComponent implements OnInit {

  /*
    This component adds a new Vendor , to be used in creating Rentals , 
    uses API to POST new data , Admin inputs vendor sales_person name, address
    and email WITH VALIDATION !!! 
    needs AuthService (ADMINS ONLY !!)
  */
  vendor: Vendor = new Vendor();
  errorMsg:any;
  vendors:any;
  @Output() notify: EventEmitter<number> = new EventEmitter();
  constructor(private vendor_srvc: VendorService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(vendorForm:any){
      this.vendor_srvc.createVendor(this.vendor).subscribe(
        (data) => this.vendors = data,
        (error) => this.errorMsg = error
      )
      this.vendor.sales_person = '';
      this.vendor.address = '';
      this.vendor.email = '';
      this.router.navigateByUrl('', {skipLocationChange:true}).then(() => {
        this.router.navigate(['Vendor/'] );
          });
      this.notify.emit(1);
      //window.location.reload();
  }

}
