import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.css']
})
export class EquipmentAddComponent implements OnInit {

  /*
  This component is used to add a new piece of Equipment to the database , it uses 
  the EquipmentService to add the information that is input in the template 
  and does some validation , not much
  !!!! TO DO: AUTHENTICATION ( ADMINS ONLY)
  */

 // id:any;
    equipment: Equipment = new Equipment();
    errorMsg: any;
    equipments:any;
    @Output() notify: EventEmitter<number> = new EventEmitter();
  constructor(private equipment_srvc: EquipmentService) { }
  

  ngOnInit(): void {

  }

  async onSubmit(equipmentAddForm:any){
    // Submits the Equipment
     console.log('category' + this.equipment.category);
     console.log('make:' + this.equipment.make);
     console.log('model:' + this.equipment.model);
     console.log('serial_no:'+ this.equipment.serial_no);
    this.equipment_srvc.createEquipment(this.equipment).subscribe(
      (data)=> this.equipment = data,
      (error) => this.errorMsg = error
    );
    await this.delay(3000);
    this.notify.emit(1);

  //  this.equipment = new Equipment();
   

  } 

  private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
