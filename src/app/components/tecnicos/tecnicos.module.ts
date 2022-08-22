import { NavBarModule } from './../nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TecnicoCreateComponent } from './childrens/tecnico-create/tecnico-create.component';


@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoCreateComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    NavBarModule
  ],
  exports: [
    TecnicosComponent,
    TecnicoCreateComponent
  ]
})
export class TecnicosModule { }
