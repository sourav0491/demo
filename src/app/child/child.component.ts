import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {DataCommunicationService} from '../data-communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parent_param:string;
  @Output() childEvent = new EventEmitter<String>();
  childMsg:string="Message from child";
  msgFromUnrelated:String="No message yet from unrelated component";

  constructor(private _dataCommunicationService:DataCommunicationService) {
    this._dataCommunicationService.getMessage().subscribe(msg => this.msgFromUnrelated=msg);
   }

  ngOnInit() {
  }

  communicate(){
    this.childEvent.emit(this.childMsg);
  }
}
