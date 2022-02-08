import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }

  addMsg(msg: string){
    this.messages = [];
    this.messages.push(msg);
  }

  clear(){
    this.messages = [];
  }
}
