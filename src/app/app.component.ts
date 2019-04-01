import { Component,ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Parent Component';
  parent_param="";
  childMessage:string="";
  @ViewChild(ChildComponent) childComponenet: ChildComponent;

  updateChildMsg(msg){
    this.childMessage=msg;
  }

  communicate(msg){
    //this.parent_param=msg.value;
    this.childComponenet.parent_param=msg.value;
  }
}
