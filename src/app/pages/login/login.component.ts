import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
  //  public authService: AuthService
  ) { }
  
  ngOnInit(): void {  
  }

  usuario={
    email : '',
    password : ''
  }


  ingresar(){
    console.log(this.usuario);
    /*
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res =>{
      console.log("se registro usuario:")
    });
    */
  }

  ingresarEmail(){
    console.log();
  }

}
