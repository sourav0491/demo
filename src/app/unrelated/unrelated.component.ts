import { Component, OnInit } from '@angular/core';
import{DataCommunicationService} from '../data-communication.service';

@Component({
  selector: 'app-unrelated',
  templateUrl: './unrelated.component.html',
  styleUrls: ['./unrelated.component.css']
})
export class UnrelatedComponent implements OnInit {
  msg:string="";
  constructor(private _dataCommunicationService:DataCommunicationService) { }

  ngOnInit() {
  }

  sendMessageToAll(){
    this._dataCommunicationService.sendMessage(this.msg);
  }

}
