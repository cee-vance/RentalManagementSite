import { Component, OnInit } from '@angular/core';
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


  constructor(private equipment_srvc: EquipmentService, private router: Router) { }
  

  ngOnInit(): void {

  }

  onSubmit(equipmentAddForm:any){
    // Submits the Equipment
     
    this.equipment_srvc.createEquipment(this.equipment);

    // Reset the form after
    this.equipment = new Equipment()

  } 

}
