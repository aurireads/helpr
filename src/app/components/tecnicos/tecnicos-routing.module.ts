import { TecnicoCreateComponent } from './childrens/tecnico-create/tecnico-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicosComponent } from './tecnicos.component';

const routes: Routes = [
  {
    path: '',
    component: TecnicosComponent
  },
  {
    path: "new",
    component: TecnicoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicosRoutingModule { }
