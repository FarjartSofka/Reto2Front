import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PistaComponent } from './pista/pista.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    PistaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    PistaComponent
  ]
})
export class SharedModule { }
