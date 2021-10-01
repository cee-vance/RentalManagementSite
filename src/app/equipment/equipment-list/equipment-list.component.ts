import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  /*
    This component uses the EquipmentService to get
    all the Invoices and display then in a tabular fashion
  */
    constructor(private equipment_srvc: EquipmentService) { }
    equipments: any;
    errorMsg: any;
    displayedColumns: string[] = ['id', 'category', 'make', 'model', 'serial_no'];
   
    ngOnInit(): void {  
      this.equipment_srvc.getEquipment().subscribe(
        (data) => this.equipments = data,
        (error) => this.errorMsg = error
      ) 
        
    }




}
