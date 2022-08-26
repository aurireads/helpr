import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrioridadePipe } from './prioridade.pipe';
import { StatusPipe } from './status.pipe';
import { EncerramentoPipe } from './encerramento.pipe';



@NgModule({
  declarations: [
    StatusPipe,
    PrioridadePipe,
    EncerramentoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusPipe,
    PrioridadePipe,
    EncerramentoPipe
  ]
})
export class PipesModule { }
