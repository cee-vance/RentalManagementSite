import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(private job_srvc: JobService) { }
  jobs: any;
  errorMsg: any;
  displayedColumns: string[] = ['id', 'name','needed_from', 'needed_to', 'rentals'];
  ngOnInit(): void {  
    this.job_srvc.getJobs().subscribe(
      (data) => this.jobs = data,
      (error) => this.errorMsg = error
    ) 

  }

}
