import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalManagementSite';
  opened: boolean = false;
  menu_select:number = 0;

  constructor(private router: Router){}
  menu($event:any){
      console.log($event.index);
      let idx = $event.index;

      if(idx==0){
       // console.log('Not implemented yet.');
          this.router.navigate(['/Invoice']);
      }
      if(idx ==1)
        this.router.navigate(['/Rental']);

      if(idx ==2)
        this.router.navigate(['/Vendor']);

      if(idx == 3)
        console.log('Not implemented yet.');
      

  }
}
