import { Component, Input } from '@angular/core';
import { data } from '../data/seed';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: string;
  showPopup:boolean = false;

  deleteTask(){
    const index = data.findIndex((x:string) => x === this.task);
    if (index !== -1) {
      data.splice(index, 1);
    }
  }

  completeTask(list:HTMLElement){
    const listClass = list.className;
    if(listClass == "listClass"){
      list.className = 'completed';
    } else {
      list.className = 'listClass';
    }
  }

  editTask(){
    this.showPopup = !this.showPopup;
  }
}
