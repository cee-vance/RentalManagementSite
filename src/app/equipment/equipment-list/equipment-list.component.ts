import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    constructor(private equipment_srvc: EquipmentService, private router: Router) { }
    equipments: any;
    errorMsg: any;
    url_:any;
    displayedColumns: string[] = ['id', 'category', 'make', 'model', 'serial_no', 'edit'];
   
    ngOnInit(): void {  
      this.equipment_srvc.getEquipment().subscribe(
        (data) => this.equipments = data,
        (error) => this.errorMsg = error
      ) 
        
    }


    // Updates the list after Admin adds an Equipment
    updateList(n:any){
   
      this.equipment_srvc.getEquipment().subscribe(
        (data) => this.equipments = data,
        (error) => this.errorMsg = error
      ) 

      console.log('in update equipment list');
      console.log('errorMsg:' + this.errorMsg);

    }

    showEdit(id:number){
      console.log('id:' + id);
      this.url_ = "Equipment/EquipmentEdit/"+id.toString()
      console.log(this.url_);
      
      //this.router.navigateByUrl(this.url_);
      console.log('finished pass id:' + id);
      this.router.navigate(['EquipmentEdit/', id] );
    


    //  this.router.navigateByUrl('', {skipLocationChange:true}).then(() => {
     // this.router.navigate(['Equipment/EquipmentEdit/', id] );  }  );
    

    } 


}
