import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../shared/web-socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public juegoId : string = '';
  public received : any[] = [];
  //public sent = [];

  constructor(
    private wsc :  WebSocketService
  ) {}

  ngOnInit(): void {


  }

  private conectecToSocket(){
    this.wsc.wscConnect(this.juegoId);
  }


  sendSocket(){

    //this.wsc.connect(`ws://localhost:8080/retrieve/${this.juegoId}`).subscribe(rs=> console.log(rs));
    /*let ws = new WebSocket(`ws://localhost:8080/retrieve/${this.juegoId}`);

    ws.onmessage = (m)=>{
        console.log('message', m.data);

    }*/

    if(this.juegoId.length===0){
      alert("campo requerido");
      return
    }

    this.conectecToSocket();

    this.wsc.messages.subscribe((msg) => {
      this.received.push(msg);
      console.log('Response from websocket: ' + msg);
    });

  }



}
