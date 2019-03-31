import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component communication in angular';
  parent_param="this parameter is from parent";
  childMessage:string="no message from child yet";

  updateChildMsg(msg){
    this.childMessage=msg;
  }
}
