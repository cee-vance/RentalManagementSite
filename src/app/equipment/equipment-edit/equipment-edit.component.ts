import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {
  equipment: Equipment = new Equipment();
  errorMsg: any;
  equipments:any;
  constructor(private equipment_srvc: EquipmentService) { }

  ngOnInit(): void {

  }
  onSubmit(equipmentAddForm:any){
    console.log('id' + this.equipment.id);
    console.log('category' + this.equipment.category);
    console.log('make:' + this.equipment.make);
    console.log('model:' + this.equipment.model);
    console.log('serial_no:'+ this.equipment.serial_no);
   this.equipment_srvc.updateEquipment(this.equipment.id,this.equipment).subscribe(
     (data)=> this.equipments = data,
     (error) => this.errorMsg = error
   );
  }
  onDelete(id:any){
    console.log('id' + this.equipment.id);
    this.equipment_srvc.deleteEquipment(this.equipment.id).subscribe(
      (data)=> this.equipments = data,
      (error) => this.errorMsg = error);

  };

}




