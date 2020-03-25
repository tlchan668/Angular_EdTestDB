import { Component, OnInit } from '@angular/core';
import { Student } from '../student.class';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Major } from 'src/app/major/major.class';
import { MajorService } from 'src/app/major/major.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = new Student();
  majors: Major[] = [];

  save(): void{
    this.studentsvc.create(this.student).subscribe(
      res => {
        console.debug("student created", res);
        this.router.navigateByUrl("/students/list");
      },
      err => {
        console.error("error creating student", err);
      }
    );
  }
  constructor(
    private studentsvc: StudentService,
    private majorsvc: MajorService,
    private router: Router
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
  }

}
