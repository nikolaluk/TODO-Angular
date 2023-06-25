import { Component, Input } from '@angular/core';
import { data } from '../data/seed';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() task!: string;
  @Input() showPopup!: boolean;
  
  cancelPopup(){
    this.showPopup = !this.showPopup;
  }

  updateTask(value:string){
    const index = data.findIndex((x:string) => x === this.task);
    data.splice(index,1,value);
    this.cancelPopup();
  }
}
