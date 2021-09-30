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

@NgModule({
  declarations: [
    AppComponent
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
  ],
  providers: [EquipmentService, VendorService, RentalService, JobService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
