import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsSocket } from 'src/app/models/notifications-socket';
import { ResultadoCarrera } from 'src/app/models/podio';
import { JuegoService } from 'src/app/services/juego.service';
import { WebSocketService } from 'src/app/shared/web-socket.service';
import Swal from 'sweetalert2';

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
  disableButtonPlay : boolean = false;
  objectGeneric : any;


  constructor( private juegoSVC : JuegoService,
              private webSocketService : WebSocketService,
              private routeActived : ActivatedRoute,
              private router : Router) { }

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
      this.disableButtonPlay = true;
      console.log('Response from websocket: ' + msg);
      this.objectGeneric  = JSON.parse(msg)

      let notification = this.objectGeneric;
      if(this.carId1 ==='' || this.carId2==='' || this.carId3===''){
        this.asignarIdCarros(notification.aggregateRootId)
      }
      this.moverCarro(notification)

      if(this.objectGeneric["podio"]){
        let resultadoFinal : ResultadoCarrera = this.objectGeneric;
        this.modalPodio(resultadoFinal);
      }



    });
  }

  abrirConexionWebSocket(){
      this.webSocketService.wscConnect(this.idJuego);
  }

  asignarIdCarros(aggregateRootId : string ){
    if(this.carId1===''){
      this.carId1 = aggregateRootId
    }

    if(this.carId2==='' && aggregateRootId!==this.carId1){
      this.carId2= aggregateRootId
    }

    if(this.carId3==='' && aggregateRootId!==this.carId1 && aggregateRootId!==this.carId2){
      this.carId3= aggregateRootId
    }
  }

  moverCarro(notificacion : NotificationsSocket){
    if(!isNaN(notificacion.distancia)){
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

  modalPodio(podio : ResultadoCarrera){
    Swal.fire({
      title: '<strong>Podio</u></strong>',
      icon: 'info',
      html:
          `<strong>Primero: </u></strong>${podio.podio.primerLugar.nombre.value} </br>
          <strong>Segundo: </u></strong>${podio.podio.segundoLugar.nombre.value} </br>
          <strong>Tercero: </u></strong>${podio.podio.tercerLugar.nombre.value} </br>`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Mejores puntajes',
      cancelButtonText: 'Crear juego!',
      focusConfirm: false,
    }).then((result)=>{
      if(result)this.router.navigate([`/mejores-puntajes`])
      else this.router.navigate([`/crear-juego`])

    })

  }

}
