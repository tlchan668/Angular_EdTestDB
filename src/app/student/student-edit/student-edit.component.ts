import { Component, OnInit } from '@angular/core';
import { Student } from '../student.class';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Major } from 'src/app/major/major.class';
import { MajorService } from 'src/app/major/major.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  
  student: Student = new Student;
  majors: Major[]=[];

  save():void{
    this.student.majorId = Number(this.student.majorId);
    this.studentsvc.change(this.student).subscribe(
      res=>
      {
        console.debug("student change success", res);
        this.router.navigateByUrl("/students/list");
      },
      err=>{
        console.error("error changing major:", err);
    }
    );
  }

  constructor(
    private studentsvc: StudentService,
    private majorsvc: MajorService,
    private route: ActivatedRoute,
    private router: Router //navigate back to list
  ) { }

  ngOnInit(): void {
    this.majorsvc.list().subscribe(
      res=>{
        this.majors =res;
        console.debug("Majors:", res);
      },
      err=> {
        console.error("error reading majors:", err);
      }
    );
    let id = this.route.snapshot.params.id; 
    this.studentsvc.get(id).subscribe(
      res=>{
        this.student = res;
        console.debug("student:", res);
      },
      err=>{
        console.error("error edit student:", err);
      }
    );
  }

}
