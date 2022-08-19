import { NavBarModule } from './../nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    TecnicosComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    NavBarModule
  ],
  exports: [
    TecnicosComponent
  ]
})
export class TecnicosModule { }
