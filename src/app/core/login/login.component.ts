import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  constructor(private router: Router, private auth_srvc: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:any){
    this.auth_srvc.login(this.username,this.password);
    this.router.navigate(['/Rental']);
  }

}
