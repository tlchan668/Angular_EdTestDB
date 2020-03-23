import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajorListComponent } from './major/major-list/major-list.component';
import { MajorDetailComponent } from './major/major-detail/major-detail.component';
import { MajorCreateComponent } from './major/major-create/major-create.component';
import { MajorEditComponent } from './major/major-edit/major-edit.component';
import { StudentListComponent } from './student/student-list/student-list.component';



const routes: Routes = [
  {path: "", redirectTo:"/majors/list", pathMatch:"full"},
  {path: "majors/list", component: MajorListComponent},
  {path: "majors/detail:id", component: MajorDetailComponent},
  {path: "majors/create", component: MajorCreateComponent},
  {path: "majors/edit", component: MajorEditComponent},
  {path: "students/list", component: StudentListComponent},
  {path: "**", component: MajorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
