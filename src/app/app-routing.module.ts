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

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'Vendor',component: VendorListComponent,children: [
      {path:'Add', component: VendorAddComponent, outlet:'lower'},
      {path:'VendorEdit/:id',component:VendorEditComponent}
  ]},
  
  { path:'Rental', component: RentalListComponent, 
    children:[ 
      {path:'Add', component: RentalAddComponent, outlet:'lower'},
      {path:'RentalEdit/:id',component:RentalEditComponent}
    ]},
    { path:'Equipment',component: EquipmentListComponent,
      children:[
        {path:'Add',component:EquipmentAddComponent},
        {path:'EquipmentEdit/:id', component: EquipmentEditComponent}
      ]},
  
     
      {path:'Invoice', component:InvoiceListComponent,
        children: [
          {path:'Add', component:InvoiceAddComponent, outlet:'lower'},
          {path:'InvoiceEdit/:id',component:InvoiceEditComponent}

   //   {path:'Edit/:id', outlet:'lower'}
    ]},
      { path:'Job', component: JobListComponent,
      children:[
        {path:'Add',component:JobAddComponent,outlet:'lower'},
        {path:'JobEdit/:id',component:JobEditComponent}
      ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
