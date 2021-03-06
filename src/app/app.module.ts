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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { RentalAddComponent } from './rental/rental-add/rental-add.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { EquipmentEditComponent } from './equipment/equipment-edit/equipment-edit.component';
import { RentalEditComponent } from './rental/rental-edit/rental-edit.component';
import { JobEditComponent } from './job/job-edit/job-edit.component';
import { InvoiceEditComponent } from './invoice/invoice-edit/invoice-edit.component';
import { LoginComponent } from './core/login/login.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthGuard } from './services/auth-guard.guard';
import { AdminAuthGuard } from './services/admin-auth.guard';



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
    InvoiceAddComponent,
    RentalAddComponent,
    VendorAddComponent,
    VendorEditComponent,
    EquipmentEditComponent,
    RentalEditComponent,
    JobEditComponent,
    InvoiceEditComponent,
    LoginComponent,
    
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
   AppRoutingModule,
  
  ],
  providers: [EquipmentService, VendorService, RentalService, JobService, InvoiceService, AuthGuard, AdminAuthGuard,
          {
            provide: HTTP_INTERCEPTORS,
            useClass:AuthInterceptorService,
            multi:true
          }],
  bootstrap: [AppComponent]
})
export class AppModule { }
