import { TecnicosModule } from './../../components/tecnicos/tecnicos.module';
import { LoginModule } from './../../components/login/login.module';
import { HomeModule } from './../../components/home/home.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations:[],
  imports: [
    HomeModule,
    LoginModule,
    TecnicosModule
  ]
})
export class PagesModule { }
