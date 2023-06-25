import { Component } from '@angular/core';
import { data } from '../data/seed';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  data:string[] = data;

  constructor() {};
}
