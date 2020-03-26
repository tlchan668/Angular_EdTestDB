import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.css']
})
export class MajorListComponent implements OnInit {

  //properties
  majors: Major[] = [];
  searchCriteria: string='';
  
  constructor(
    private major: MajorService
  ) { }

  ngOnInit(): void {
    //ngOnit everytime go back to major list so have lifecycle method that angular
    //will call it each time to get the current list
    //access major service
    this.major.list().subscribe(
      //if everything goes right
      res=> {
        this.majors = res;
        console.debug("Major-list Users:",res);},
      //error
      err => {console.error(err);}
    );
  }

}
