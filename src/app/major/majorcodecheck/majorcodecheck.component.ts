import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-majorcodecheck',
  templateUrl: './majorcodecheck.component.html',
  styleUrls: ['./majorcodecheck.component.css']
})
export class MajorcodecheckComponent implements OnInit {
  major: Major= new Major();
  message: string = ''

  check(): void {
    //called when button is clicked
    this.majorsvc.checkCode(this.major.code).subscribe(
    res =>{
      this.major=res;
      this.message=this.major.name;
      console.debug("Major:" , res);
    },
    err=>{
      this.message = "Not found";
      console.debug("Not found",err);
    }
    );
  }

  constructor(
    private majorsvc: MajorService
  ) { }

  ngOnInit(): void {
  }

}
