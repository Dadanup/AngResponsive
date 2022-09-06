import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarRoutingModule } from './modificar-routing.module';
import { ModificarComponent } from './modificar.component';

import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    ModificarComponent
  ],
  imports: [
    CommonModule,
    ModificarRoutingModule,
    MatTabsModule
  ]
})
export class ModificarModule { }
