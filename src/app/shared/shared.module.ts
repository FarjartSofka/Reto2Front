import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PistaComponent } from './pista/pista.component';


@NgModule({
  declarations: [
    PistaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PistaComponent
  ]
})
export class SharedModule { }
