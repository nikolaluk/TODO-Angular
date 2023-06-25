import { Component } from '@angular/core';
import { data } from '../data/seed';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  addTask(input: string) {
    if (input.length > 0) {
      data.push(input);
    }
  }
}
