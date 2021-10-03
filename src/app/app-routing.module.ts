import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentAddComponent } from './equipment/equipment-add/equipment-add.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { InvoiceAddComponent } from './invoice/invoice-add/invoice-add.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { JobAddComponent } from './job/job-add/job-add.component';
import { JobListComponent } from './Job/job-list/job-list.component';
import { RentalAddComponent } from './rental/rental-add/rental-add.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {path:'Vendor',component: VendorListComponent,children: [
      {path:'Add', component: VendorAddComponent, outlet:'lower'},
  //    {path: 'Edit/:id', outlet:'lower' }
  ]},
  
  { path:'Rental', component: RentalListComponent, 
    children:[ 
      {path:'Add', component: RentalAddComponent, outlet:'lower'},
    //  {path: 'Edit/:id', outlet:'lower'}
    ]},
    { path:'Equipment',component: EquipmentListComponent,
      children:[
          {path: 'Add', component: EquipmentAddComponent, outlet:'lower'},
      //    {path:'Edit/:id',  outlet:'lower'}
      ]},
      {path:'Invoice', component:InvoiceListComponent,
        children: [
      {path:'Add', component:InvoiceAddComponent, outlet:'lower'},
   //   {path:'Edit/:id', outlet:'lower'}
    ]},
      { path:'Job', component: JobListComponent, 
        children: [
          {path:'Add', component: JobAddComponent, outlet:'lower'},
    //      {path:'Edit/:id', outlet:'lower'}
        ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
