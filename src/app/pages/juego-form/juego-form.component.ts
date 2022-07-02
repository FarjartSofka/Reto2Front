import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-juego-form',
  templateUrl: './juego-form.component.html',
  styleUrls: ['./juego-form.component.css']
})
export class JuegoFormComponent implements OnInit {

  formGame = this.fb.group({
    kilometros: ['', [Validators.required]],
    juego:['', [Validators.required]],
    jugadores: this.fb.array([],[Validators.minLength(3), Validators.maxLength(3)])
  });

  jugadoresForm = this.fb.group({
    nombre:['',[Validators.required]],
    numeroDoc:['',[Validators.required]]
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit(){
    let obj = this.formGame.value
    console.log(obj)
  }


  get jugadores(){
    return this.formGame.controls['jugadores'] as FormArray;
  }

  agregarJugador(){
    this.jugadores.push(this.jugadoresForm)
  }

}
