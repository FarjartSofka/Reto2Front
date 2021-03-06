import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearJuegoComponent } from './crear-juego/crear-juego.component';
import { IniciarJuegoComponent } from './iniciar-juego/iniciar-juego.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { MejoresPuntajesComponent } from './mejores-puntajes/mejores-puntajes.component';
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'crear-juego', component: CrearJuegoComponent },
  {path:'registro', component: RegistrarComponent},
  {path:'iniciar-juego/:id/:kilometros', component: IniciarJuegoComponent},
  {path:'mejores-puntajes', component:MejoresPuntajesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
