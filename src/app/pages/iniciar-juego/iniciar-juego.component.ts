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

  carId1 : string='';
  carId2 : string='';
  carId3 : string='';
  idJuego : string = '';
  distancia1 : number = 0
  distancia2 : number = 0
  distancia3 : number = 0
  distanciaMax : number = 0


  constructor( private juegoSVC : JuegoService,
              private webSocketService : WebSocketService,
              private routeActived : ActivatedRoute) { }

  ngOnInit(): void {

    this.routeActived.params.subscribe(
      (params)=>{
        this.idJuego = params['id'];
        this.distanciaMax = params['kilometros']*1000
      }
    )
  }

  iniciarJuego(){
    this.juegoSVC.iniciarJego(this.idJuego).subscribe(response=>response);
    this.abrirConexionWebSocket();
    this.webSocketService.messages.subscribe((msg) => {
      console.log('Response from websocket: ' + msg);
      let notification : NotificationsSocket = JSON.parse(msg)
      if(this.carId1 ==='' || this.carId2==='' || this.carId3===''){
        this.asignarIdCarros(notification)
      }
      this.moverCarro(notification)

    });



  }

  abrirConexionWebSocket(){
      this.webSocketService.wscConnect(this.idJuego);
  }

  asignarIdCarros(notificacion : NotificationsSocket ){
    if(this.carId1===''){
      this.carId1 = notificacion.aggregateRootId
    }

    if(this.carId2==='' && notificacion.aggregateRootId!==this.carId1){
      this.carId2=notificacion.aggregateRootId
    }

    if(this.carId3==='' && notificacion.aggregateRootId!==this.carId1 && notificacion.aggregateRootId!==this.carId2){
      this.carId3=notificacion.aggregateRootId
    }
  }

  moverCarro(notificacion : NotificationsSocket){

    switch(notificacion.aggregateRootId){
      case this.carId1:
        this.distancia1 += notificacion.distancia;
        break
      case this.carId2:
        this.distancia2 += notificacion.distancia;
        break
      case this.carId3:
        this.distancia3 += notificacion.distancia;
        break


    }
  }

}
