import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoFormComponent } from './juego-form/juego-form.component';

const routes: Routes = [
  {path:'', component: JuegoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
