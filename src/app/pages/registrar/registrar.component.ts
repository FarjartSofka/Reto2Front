import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(
    public authService: AuthService
   ) { }
 

  usuario={
    email : '',
    password : ''
  }

  ingresar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res =>{
      console.log("se registro usuario:")
    });
  }

  ingresarEmail(){
    console.log();
    const {email, password} = this.usuario;
    this.authService.loginGoogle(email, password).then(res =>{
      console.log("se registro usuario:")
    });
  }

  registrar(){
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res =>{
      console.log("se registro usuario:")
    });
  }

  ngOnInit(): void {
  }

}
