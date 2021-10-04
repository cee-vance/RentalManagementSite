import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  /*
    This component uses the InvoiceService to get
    all the Invoices and display then in a tabular fashion
  */
  constructor(private invoice_srvc: InvoiceService) { }
  invoices: any;
  errorMsg: any;

  displayedColumns: string[] = ['id', 'invoice_date', 'rental_period', 'invoice_amount', 'job_id'];
  ngOnInit(): void {  
    this.invoice_srvc.getInvoices().subscribe(
      (data) => this.invoices = data,
      (error) => this.errorMsg = error
    ) 

  }

  updateList(n:any){
    this.invoice_srvc.getInvoices().subscribe(
      (data) => this.invoices = data,
      (error) => this.errorMsg = error
    ) 
  }

}
