import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { NavBarModule } from './../nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';


@NgModule({
  declarations: [
    ChamadosComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    NavBarModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ChamadosComponent
  ]
})
export class ChamadosModule { }
