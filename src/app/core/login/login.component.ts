import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username:string = '';
   password:string = '';
  creds:any;
  result: any = ''

  constructor(private auth_srvc: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

   onSubmit(loginForm:any){

    //console.log(this.username);
    // console.log(this.password);
    if(this.auth_srvc.login(this.username, this.password) == false){
      this.result == 'No user/password found';
    }

    
    // navigate away based on creds 
    if (this.auth_srvc.isLoggedIn == true){

        this.router.navigate(['/Rental']);
    }   else{
        this.result = 'not authorized';
    }     

    // console.log('Not implemented yet');
  }


}
