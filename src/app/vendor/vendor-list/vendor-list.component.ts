import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

/*
    This component uses the VendorService to get
    all the vendors and display then in a tabular fashion
  */
    constructor(private vendor_srvc: VendorService) { }
    vendors: any;
    errorMsg: any;
  
    displayedColumns: string[] = ['id', 'sales_person', 'address', 'email'];
    ngOnInit(): void {  
      this.vendor_srvc.getVendors().subscribe(
        (data) => this.vendors = data,
        (error) => this.errorMsg = error
      ) 
        
    }

    updateList(n:any){
      this.vendor_srvc.getVendors().subscribe(
        (data) => this.vendors = data,
        (error) => this.errorMsg = error
      ) 
    }
}
