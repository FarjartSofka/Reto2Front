import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
   public authService: AuthService,
   public router: Router
  ) { }

  ngOnInit(): void {
  }

  usuario={
    email : '',
    password : ''
  }


  ingresar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.login(email, password).then(res =>{
      if((res?.user?.getIdToken())){
        this.router.navigate(['crear-juego']);
            }
    }).catch(error =>{
      this.router.navigate(['login']);
    });
  }

  ingresarEmail(){
    console.log();
    const {email, password} = this.usuario;
    this.authService.loginGoogle(email, password).then(res =>{
     
    if((res?.user?.getIdToken())){
        this.router.navigate(['crear-juego']);
            }
    }).catch(error =>{
      this.router.navigate(['login']);
    });
  }

  registrar(){
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res =>{
      console.log("se registro usuario:")
    });
  }

}
