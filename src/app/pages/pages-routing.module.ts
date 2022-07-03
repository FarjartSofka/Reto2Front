import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearJuegoComponent } from './crear-juego/crear-juego.component';
import { IniciarJuegoComponent } from './iniciar-juego/iniciar-juego.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'crear-juego', component: CrearJuegoComponent },
  {path:'iniciar-juego/:id', component: IniciarJuegoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
