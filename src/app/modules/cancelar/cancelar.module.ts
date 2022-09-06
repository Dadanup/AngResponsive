import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelarRoutingModule } from './cancelar-routing.module';
import { CancelarComponent } from './cancelar.component';


@NgModule({
  declarations: [
    CancelarComponent
  ],
  imports: [
    CommonModule,
    CancelarRoutingModule
  ]
})
export class CancelarModule { }
