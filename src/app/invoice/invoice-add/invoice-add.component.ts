import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { Job } from 'src/app/models/job';
import { InvoiceService } from 'src/app/services/invoice.service';
import { JobService } from 'src/app/services/job.service';
import { RentalService } from 'src/app/services/rental.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.css']
})
export class InvoiceAddComponent implements OnInit {

  /*
    This component is used to create a new Invoice, calls InvoiceService and JobSerivce and RentalService to sum the rentals for the 
    associated job based on rate and 
    to single-select from the list of jobs to associate 1-to-1 with the created invoice

  */
    
    jobs:any;
    errorMsg:any;
    invoice = new Invoice();
    selected_job:any;
    invoices:any;
    @Output() notify: EventEmitter<number> = new EventEmitter();
  constructor(private invoice_srvc: InvoiceService, private job_srvc: JobService, private rental_srvc: RentalService,private router:Router) { }

  ngOnInit(): void {
    this.job_srvc.getJobs().subscribe(
      (data) => this.jobs = data,
      (error) => this.errorMsg = error
    ) 
  }



     async onSubmit(invoiceForm:any){
          

            

            let now = new Date();
            let now_str = now.toLocaleDateString('en-ca');
            this.invoice.job = +this.invoice.job[0];
            this.invoice.invoice_amount = +this.invoice.invoice_amount;
            this.invoice.rental_period = +this.invoice.rental_period;
            console.log(now_str);
            this.invoice.invoice_date = now_str;
            this.invoice_srvc.createInvoice(this.invoice).subscribe(
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
  }


 /*  */


