import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsSocket } from 'src/app/models/notifications-socket';
import { JuegoService } from 'src/app/services/juego.service';
import { WebSocketService } from 'src/app/shared/web-socket.service';

@Component({
  selector: 'app-iniciar-juego',
  templateUrl: './iniciar-juego.component.html',
  styleUrls: ['./iniciar-juego.component.css']
})
export class IniciarJuegoComponent implements OnInit {

  idJuego : string = '';
  received : any = [];

  constructor( private juegoSVC : JuegoService,
              private webSocketService : WebSocketService,
              private routeActived : ActivatedRoute) { }

  ngOnInit(): void {

    this.routeActived.params.subscribe(
      (params)=>{
        this.idJuego = params['id'];
      }
    )
  }

  iniciarJuego(){
    this.juegoSVC.iniciarJego(this.idJuego).subscribe(response=>response);
    this.abrirConexionWebSocket();
    this.webSocketService.messages.subscribe((msg) => {
      this.received.push(msg);
      console.log('Response from websocket: ' + msg);
    });



  }

  abrirConexionWebSocket(){
      this.webSocketService.wscConnect(this.idJuego);
  }

}
