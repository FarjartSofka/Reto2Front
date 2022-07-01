import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }


  private conectSocket(url : string){
    let webSocket = new WebSocket(url);

    let obs = new Observable((obsv: Observer<MessageEvent>)=>{
      webSocket.onmessage=obsv.next.bind(obsv);
      webSocket.onerror
    })

  }
}
