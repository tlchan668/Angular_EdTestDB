import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student/student.class';

@Pipe({
  name: 'studentSearch'
})
export class StudentSearchPipe implements PipeTransform {

  transform(students: Student[], searchCriteria: string = ''): Student[] {
    if(searchCriteria === '') return students;
    let criteria = searchCriteria.toLowerCase();
    let selStudents: Student[] = [];
    for (let student of students){
      if(student.id.toString().includes(criteria)){
        selStudents.push(student);
        continue;
      }
      if(student.name.toLowerCase().includes(criteria)){
        selStudents.push(student);
        continue;
      }
      if(student.sat.toString().includes(criteria)){
        selStudents.push(student);
        continue;
      }
      if(student.gpa.toString().includes(criteria)){
        selStudents.push(student);
        continue;
      }
      if(student.majorId != null && student.major.name.toLowerCase().includes(criteria)){
        selStudents.push(student);
        continue;
      }
    }
    return selStudents;
  }

}
