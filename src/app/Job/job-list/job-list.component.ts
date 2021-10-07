import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(private job_srvc: JobService,private router:Router) { }
  jobs: any;
  errorMsg: any;
  displayedColumns: string[] = ['id', 'name','needed_from', 'needed_to', 'rentals','edit'];
  ngOnInit(): void {  
    this.job_srvc.getJobs().subscribe(
      (data) => this.jobs = data,
      (error) => this.errorMsg = error
    ) 

  }

  //updateList(n:any){
  //  this.job_srvc.getJobs().subscribe(
  //    (data) => this.jobs = data,
  //    (error) => this.errorMsg = error
  //  ) 

  // console.log('updated Jobs');
  //}

  showEdit(id:number){
    console.log('id:' + id);
    console.log('finished pass id:' + id);
    this.router.navigateByUrl('', {skipLocationChange:true}).then(() => {
    this.router.navigate(['JobEdit/', id] );
      });

  } 

}
