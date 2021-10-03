import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { FormsModule } from '@angular/forms';
import { Job } from 'src/app/models/job';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {

  /*
    This is the Component for adding Job with REST api,
    the user inputs the dates as date pickers , and uses
    the list of Rentals to add to list of Rentals associated with 
    the new job, at least one Rental is required.  
    !!!! This component still needs Validation , required for the 2 dates and 
    for requiring at least 1 Rental for the newly created job
  */
  job:Job = new Job();
  jobs:any;
  
  errorMsg:any;
  rentals: any;
  rental_ids:number[] = []
  picker1:any;
  picker2:any;
  constructor(private job_srvc: JobService,private rental_srvc: RentalService) { }

  ngOnInit(): void {
    this.rental_srvc.getRentals().subscribe(
      (data) => this.rentals = data,
      (error) => this.errorMsg = error
    ) 

  }

  picker1_changed($event:any){
      
    let d = new Date($event.target.value);
    
    console.log(d.toLocaleDateString('en-ca'));
    this.job.needed_from = d.toLocaleDateString('en-ca');
  }

  picker2_changed($event:any){
   
    
    let d = new Date($event.target.value);
    
    console.log(d.toLocaleDateString('en-ca'));
    this.job.needed_to = d.toLocaleDateString('en-ca');
  }

  onSubmit(jobForm:any){
      this.job.rentals = this.rental_ids;

    

      console.log('Adding job');
      this.job_srvc.createJob(this.job).subscribe(
        (data) => {this.jobs = data;
          this.job_srvc.getJobs().subscribe(
            (data) => this.jobs = data,
            (error) => this.errorMsg = error
          )
          },
      (error) => this.errorMsg = error
    )
    if(this.errorMsg)
          console.log(this.errorMsg);
  } 

}
