import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { JuegoFormComponent } from './juego-form/juego-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    JuegoFormComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class PagesModule { }
