import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { IniciarJuegoComponent } from './iniciar-juego/iniciar-juego.component';
import { CrearJuegoComponent } from './crear-juego/crear-juego.component';
import { AuthService } from '../shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { RegistrarComponent } from './registrar/registrar.component';
import { MejoresPuntajesComponent } from './mejores-puntajes/mejores-puntajes.component';



@NgModule({
  declarations: [
    LoginComponent,
    CrearJuegoComponent,
    IniciarJuegoComponent,
    RegistrarComponent,
    MejoresPuntajesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]

})
export class PagesModule { }
