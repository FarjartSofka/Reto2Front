import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationsSocket } from "../models/notifications-socket";
import { environment } from "src/environments/environment";



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private URL_WS = environment.webSocketUrl;
  private subject  = new AnonymousSubject<MessageEvent<NotificationsSocket>>;
  public messages = new  Subject<any>;

  constructor() {

  }

  public wscConnect(juegoId : string ){


    this.messages = <Subject<NotificationsSocket>>this.connect(juegoId).pipe(
      map(
          (response: MessageEvent) :NotificationsSocket => {
            return response.data
          }
      )
  );
  }

  public connect(url : string): AnonymousSubject<MessageEvent<NotificationsSocket>> {
      //if (this.subject === undefined) {
          this.subject = this.create(url);
          console.log("Successfully connected: " + url);
      //}
      return this.subject;
  }

  private create(juegoId: string): AnonymousSubject<MessageEvent<NotificationsSocket>> {
      let socket = new WebSocket(`${this.URL_WS}/retrieve/${juegoId}`);
      let observable = new Observable((obsr: Observer<MessageEvent<NotificationsSocket>>) => {
          socket.onmessage = obsr.next.bind(obsr);
          socket.onerror = obsr.error.bind(obsr);
          socket.onclose = obsr.complete.bind(obsr);
          return socket.close.bind(socket);
      });
      let observer : Observer<object> = {
          error: (err) => console.error(err),
          complete: ()=> console.log("completed"),
          next: (data: Object) => {
              console.log('Message sent to websocket: ', data);
              if (socket.readyState === WebSocket.OPEN) {
                console.log(data);

                socket.send(JSON.stringify(data));
              }
          }
      };
      return new AnonymousSubject<MessageEvent<NotificationsSocket>>(observer, observable);
  }
}

