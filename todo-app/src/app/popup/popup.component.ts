import { Component, Input, Output, EventEmitter } from '@angular/core';
import { data } from '../data/seed';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() task!: string;
  @Input() showPopup!: boolean;
  @Output() dataChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  cancelPopup(){
    this.dataChanged.emit(!this.showPopup);
  }

  updateTask(value:string){
    const index = data.findIndex((x:string) => x === this.task);
    data.splice(index,1,value);
    this.cancelPopup();
  }
}
