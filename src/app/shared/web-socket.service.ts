import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private subject  = new AnonymousSubject<MessageEvent>;
  public messages = new  Subject<any>;

  constructor() {

  }

  public wscConnect(juegoId : string ){


    this.messages = <Subject<any>>this.connect(juegoId).pipe(
      map(
          (response: MessageEvent) :any => {
            return response.data
          }
      )
  );
  }

  public connect(url : string): AnonymousSubject<MessageEvent> {
      //if (this.subject === undefined) {
          this.subject = this.create(url);
          console.log("Successfully connected: " + url);
      //}
      return this.subject;
  }

  private create(juegoId: string): AnonymousSubject<MessageEvent> {
      let socket = new WebSocket(`ws://localhost:8080/retrieve/${juegoId}`);
      let observable = new Observable((obsr: Observer<MessageEvent>) => {
          socket.onmessage = obsr.next.bind(obsr);
          socket.onerror = obsr.error.bind(obsr);
          socket.onclose = obsr.complete.bind(obsr);
          return socket.close.bind(socket);
      });
      let observer : Observer<object> = {
          error: (err => console.log(err)),
          complete: ()=>true,
          next: (data: Object) => {
              console.log('Message sent to websocket: ', data);
              if (socket.readyState === WebSocket.OPEN) {
                socket.send(JSON.stringify(data));
              }
          }
      };
      return new AnonymousSubject<MessageEvent>(observer, observable);
  }
}

