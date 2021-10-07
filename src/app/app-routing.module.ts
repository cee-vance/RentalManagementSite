import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { EquipmentAddComponent } from './equipment/equipment-add/equipment-add.component';
import { EquipmentEditComponent } from './equipment/equipment-edit/equipment-edit.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { InvoiceAddComponent } from './invoice/invoice-add/invoice-add.component';
import { InvoiceEditComponent } from './invoice/invoice-edit/invoice-edit.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { JobListComponent } from './Job/job-list/job-list.component';
import { JobAddComponent } from './job/job-add/job-add.component';
import { JobEditComponent } from './job/job-edit/job-edit.component';
import { RentalAddComponent } from './rental/rental-add/rental-add.component';
import { RentalEditComponent } from './rental/rental-edit/rental-edit.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { AuthGuard } from './services/auth-guard.guard';
import { AdminAuthGuard } from './services/admin-auth.guard';

const routes: Routes = [
   // logged in is ok
    {path: '', component: LoginComponent},
     {path:'Vendor',component: VendorListComponent, canActivate:[AuthGuard]},
      {path:'VendorAdd', component: VendorAddComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path:'VendorEdit/:id',component:VendorEditComponent, canActivate:[AuthGuard, AdminAuthGuard]},

  // logged in is ok
   { path:'Rental', component: RentalListComponent, canActivate:[AuthGuard]},
    // must be admin
      {path:'RentalAdd', component: RentalAddComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path:'RentalEdit/:id',component:RentalEditComponent, canActivate:[AuthGuard, AdminAuthGuard]},
     // logged in is ok
    { path:'Equipment',component: EquipmentListComponent, canActivate:[AuthGuard]},
    { path : 'EquipmentAdd', component: EquipmentAddComponent, canActivate:[AuthGuard, AdminAuthGuard]},
    {path: 'EquipmentEdit/:id', component: EquipmentEditComponent, canActivate:[AuthGuard, AdminAuthGuard]},
    
  
      // logged in is ok
      {path:'Invoice', component:InvoiceListComponent, canActivate:[AuthGuard]},
      {path:'InvoiceAdd', component:InvoiceAddComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path:'InvoiceEdit/:id',component:InvoiceEditComponent, canActivate:[AuthGuard, AdminAuthGuard]},

      { path:'Job', component: JobListComponent, canActivate:[AuthGuard]},
        {path:'JobAdd',component:JobAddComponent, canActivate:[AuthGuard, AdminAuthGuard]},
        {path:'JobEdit/:id',component:JobEditComponent, canActivate:[AuthGuard, AdminAuthGuard]}
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
