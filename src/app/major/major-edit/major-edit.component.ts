import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-edit',
  templateUrl: './major-edit.component.html',
  styleUrls: ['./major-edit.component.css']
})
export class MajorEditComponent implements OnInit {

  major: Major = new Major();
  save():void{
    this.majorsvc.change(this.major).subscribe(
      res=>
      {
        console.debug("major change success", res);
        this.router.navigateByUrl("/majors/list");
      },
      err=>{
        console.error("error changing major:", err);
    }
    );
  }
  constructor(
    private majorsvc: MajorService,
    private route: ActivatedRoute, //read variable off the route
    private router: Router //navigate back to list
  ) { }

  ngOnInit(): void {
    //read theid
    let id=this.route.snapshot.params.id;
    //read for that item
    this.majorsvc.get(id).subscribe(
      res=>
        {
          this.major = res;
          console.debug("major:", res);
          
        },
        err=>{
          console.error("error editing major:", err);
      }
      );
  }

}
