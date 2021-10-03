import { Component, OnInit } from '@angular/core';
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
  constructor(private vendor_srvc: VendorService) { }

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
  }

}