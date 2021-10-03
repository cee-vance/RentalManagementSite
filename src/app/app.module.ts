import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { EquipmentService } from './services/equipment.service';
import { VendorService } from './services/vendor.service';
import { RentalService } from './services/rental.service';
import { JobService } from './services/job.service';
import { InvoiceService } from './services/invoice.service';
import { JobListComponent } from './Job/job-list/job-list.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { EquipmentAddComponent } from './equipment/equipment-add/equipment-add.component';
import { JobAddComponent } from './job/job-add/job-add.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatNativeDateModule } from     '@angular/material/core';
import { InvoiceAddComponent } from './invoice/invoice-add/invoice-add.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    InvoiceListComponent,
    EquipmentListComponent,
    RentalListComponent,
    VendorListComponent,
    EquipmentAddComponent,
    JobAddComponent,
    InvoiceAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [EquipmentService, VendorService, RentalService, JobService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
