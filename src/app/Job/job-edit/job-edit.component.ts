import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/models/job';
import { RentalService } from 'src/app/services/rental.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  job:Job = new Job();
  jobs:any;
  errorMsg:any;
  rentals: any;
  rental_ids:number[] = []
  picker1:any;
  picker2:any;

  constructor(private job_srvc: JobService,private rental_srvc: RentalService,private activeRoute: ActivatedRoute,private route:Router, private router:Router) { }

  ngOnInit(): void {
    this.rental_srvc.getRentals().subscribe(
      (data) => this.rentals = data,
      (error) => this.errorMsg = error
    ) 
    console.log("Run the getId");
    this.getId()

  }
  getId(){
    if(this.activeRoute.snapshot.params['id']){
      this.job_srvc.getJobById( this.activeRoute.snapshot.params['id']).subscribe(
        (data) => this.job.id = data,
        (error) => this.errorMsg = error
      )}
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
      this.job_srvc.updateJob(this.job.id,this.job).subscribe(
        (data) => {this.jobs = data;
          this.job_srvc.getJobs().subscribe(
            (data) => this.jobs = data,
            (error) => this.errorMsg = error
          )
          },
      (error) => this.errorMsg = error
    )
   
    this.router.navigate(['/Job']);
  } 

  
  private delay(ms: number)
{ 
  return new Promise(resolve => setTimeout(resolve, ms));
}
onDelete(id:any){
  console.log('id' + this.job.id);
  this.job_srvc.deleteJob(this.job.id).subscribe(
    (data)=> this.jobs = data,
    (error) => this.errorMsg = error);
    this.router.navigate(['/Job']);
};


}
