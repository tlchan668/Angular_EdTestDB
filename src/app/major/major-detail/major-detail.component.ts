import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit {

  major: Major = new Major(); 

  delete():void{
//buttons gets click call method
    this.majorsvc.remove(this.major).subscribe(
      res=> {
        console.debug("major delete", res);
        this.router.navigateByUrl("/majors/list");
      },
      err => {
        console.error("Major delete failed", err);
      }
    );
  }

  constructor(
    private route:ActivatedRoute,
    private majorsvc: MajorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    //get id now call service to get major
    this.majorsvc.get(id).subscribe(
      res =>{
        this.major = res;
        console.debug("Major:", res);
      },
      err => {
        console.error("Error on major.get()", err);
      }
    )
  }

}
