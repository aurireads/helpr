import { NavBarModule } from './../nav-bar/nav-bar.module';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    NavBarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
