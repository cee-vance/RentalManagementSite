import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalManagementSite';
  opened: boolean = false;
  menu_select:number = 0;
  loggedIn:boolean = false;
  constructor(private router: Router, public auth_srvc: AuthServiceService){}

  ngOnInit(){

    this.auth_srvc.getIsLoggedIn().subscribe((data) => this.loggedIn = data);
  }
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
        this.router.navigate(['/Equipment']);
      

  }

  doLogout(){
    this.auth_srvc.logout();
    this.router.navigate(['']);
  }
}
