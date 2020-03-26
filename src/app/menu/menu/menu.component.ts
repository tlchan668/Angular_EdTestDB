import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    //create new instance of menu
    new Menu("Majors", "/majors/list", "The major list page"),
    new Menu("Students", "/students/list", "The student list page"),
    new Menu("Check Code", "/majors/code", "The check major list page")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
