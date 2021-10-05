import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/models/vendor';
import { VendorService } from 'src/app/services/vendor.service';
@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor = new Vendor();
  errorMsg:any;
  vendors:any;
  //@Output() notify: EventEmitter<number> = new EventEmitter();
  constructor(private vendor_srvc: VendorService,private activeRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    console.log("Run the getId");
    this.getId()
  }
  getId(){
    if(this.activeRoute.snapshot.params['id']){
      this.vendor_srvc.getVendorById( this.activeRoute.snapshot.params['id']).subscribe(
        (data) => this.vendor = data,
        (error) => this.errorMsg = error
      )}
    }
  onSubmit(vendorForm:any){
      this.vendor_srvc.updateVendor(this.vendor.id,this.vendor).subscribe(
        (data) => this.vendors = data,
        (error) => this.errorMsg = error
      )
      this.vendor.sales_person = '';
      this.vendor.address = '';
      this.vendor.email = '';
      //this.notify.emit(1);
      window.location.reload();
  }
  onDelete(id:any){
    console.log('id' + this.vendor.id);
    this.vendor_srvc.deleteVendor(this.vendor.id).subscribe(
      (data)=> this.vendors = data,
      (error) => this.errorMsg = error);
    window.location.reload();
  };

}








