import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
//decorator to allow parent to pass info into that property
  @Input()
  menu: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
