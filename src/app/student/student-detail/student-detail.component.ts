import { Component, OnInit } from '@angular/core';
import { Student } from '../student.class';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student = new Student();

  delete():void{
    this.studentsvc.remove(this.student).subscribe(
      res => {
        console.debug("student deleted", res);
        this.router.navigateByUrl("/students/list")
      },
      err => {
        console.error("student delete failed", err)
      }
    );
  }

  constructor(
    private route:ActivatedRoute,
    private studentsvc: StudentService,
    private router: Router
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.studentsvc.get(id).subscribe(
      res => {
        this.student= res;
        console.debug("Student detail:", res);
      },
      err => {
        console.error("Error on student.get()", err);
      }

    )
  }

}
