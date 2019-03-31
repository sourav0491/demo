import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  private subject=new Subject<String>();

  constructor() { }

  sendMessage(msg:String){
    this.subject.next(msg);
  }

  getMessage(){
      return this.subject.asObservable();
  }
}
