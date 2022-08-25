import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrioridadePipe } from './prioridade.pipe';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    StatusPipe,
    PrioridadePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe,
    PrioridadePipe
  ]
})
export class PipesModule { }
