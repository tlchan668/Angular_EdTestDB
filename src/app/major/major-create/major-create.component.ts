import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Router } from '@angular/router';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-create',
  templateUrl: './major-create.component.html',
  styleUrls: ['./major-create.component.css']
})
export class MajorCreateComponent implements OnInit {

  //prop html can bind to so page doesnt show errors
  major: Major = new Major();
  
  save(): void{
    //this.major.minSat = Number(this.major.minSat); and change html to text
    this.majorsvc.create(this.major).subscribe(
      res => {
        console.debug("major created", res);
        //navigate back to list
        this.router.navigateByUrl("/majors/list");
      },
      err => {
        console.error("error creating major", err);
      }
    );
  }
  constructor(
    private majorsvc: MajorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //default values here or in major class 
    this.major.minSat = 800;
  }

}
