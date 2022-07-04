import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.css']
})
export class CrearJuegoComponent implements OnInit {
  jugadoresNoValidos = true;
  formGame = this.fb.group({
    kilometros: ['', [Validators.required]],
    juego:['', [Validators.required]],
    jugadores: this.fb.array([])
  });

  constructor(
    private juegoSvc : JuegoService,
    private router : Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validarCantidadJugadores();
  }

  validarCantidadJugadores(){
    this.jugadores.valueChanges.subscribe(value=> this.jugadoresNoValidos = value.length!==3)
  }

  agregarJugador(){

    let jugadoresForm = this.fb.group({
      nombre:['',[Validators.required]],
      numeroDoc:['',[Validators.required]]
    });

    this.jugadores.push(jugadoresForm)
  }

  onSubmit(){
    let juegoCrear = this.crearObjetoNuevoJuego();
    this.crearJuego(juegoCrear);

  }


  private crearObjetoNuevoJuego(){
    return {
      kilometros: this.kilometros.value,
      juegoId: this.juego.value,
      jugadores: this.crearObjetoJugadores()
    }
  }

  private crearObjetoJugadores(){
    const jugadores : any= {};
    this.jugadores.controls.forEach(element => {
      let documento= element.value.numeroDoc.toString();
      let nombre= element.value.nombre;
      jugadores[documento] = nombre;
    });
    return jugadores;
  }


  crearJuego(nuevoJuego : any){
    this.juegoSvc.crearJuego(nuevoJuego).subscribe(response=>this.router.navigate([`iniciar-juego/${response}/${nuevoJuego['kilometros']}`]) );
  }


  get kilometros(){
    return this.formGame.controls['kilometros'];
  }

  get juego(){
    return this.formGame.controls['juego'];
  }


  get jugadores(){
    return this.formGame.controls['jugadores'] as FormArray;
  }



}
