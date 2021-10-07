
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Job } from 'src/app/models/job';
import { InvoiceService } from 'src/app/services/invoice.service';
import { JobService } from 'src/app/services/job.service';
import { RentalService } from 'src/app/services/rental.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  jobs:any;
  errorMsg:any;
  invoice = new Invoice();
  selected_job:any;
  invoices:any;
  @Output() notify: EventEmitter<number> = new EventEmitter();
constructor(private invoice_srvc: InvoiceService, private job_srvc: JobService, private rental_srvc: RentalService,private activeRoute: ActivatedRoute,private router: Router) { }

ngOnInit(): void {
  this.job_srvc.getJobs().subscribe(
    (data) => this.jobs = data,
    (error) => this.errorMsg = error
  ) 
  console.log("Run the getId");
  this.getId()
}
getId(){
  if(this.activeRoute.snapshot.params['id']){
    this.invoice_srvc.getInvoiceById( this.activeRoute.snapshot.params['id']).subscribe(
      (data) => this.invoice = data,
      (error) => this.errorMsg = error
    )}
  }
   async onSubmit(invoiceForm:any){
          let now = new Date();
          let now_str = now.toLocaleDateString('en-ca');
          this.invoice.job = +this.invoice.job[0];
          this.invoice.invoice_amount = +this.invoice.invoice_amount;
          this.invoice.rental_period = +this.invoice.rental_period;
          console.log(now_str);
          this.invoice.invoice_date = now_str;
          this.invoice_srvc.updateInvoice(this.invoice.id,this.invoice).subscribe(
            (data) => this.invoices = data,
            (error) => this.errorMsg = error
          )
          this.router.navigateByUrl('', {skipLocationChange:true}).then(() => {
            this.router.navigate(['Invoice/'] );
              });

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

private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
onDelete(id:any){
  console.log('id' + this.invoice.id);
  this.invoice_srvc.deleteInvoice(this.invoice.id).subscribe(
    (data)=> this.invoices = data,
    (error) => this.errorMsg = error);
  //window.location.reload();
  this.router.navigateByUrl('', {skipLocationChange:true}).then(() => {
    this.router.navigate(['Invoice/'] );
      });
};

}

