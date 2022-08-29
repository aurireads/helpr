import { TecnicoCreateComponent } from './children/tecnico-create/tecnico-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicosComponent } from './tecnicos.component';
import { TecnicoUpdateComponent } from './children/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: TecnicosComponent
  },
  {
    path: "new",
    component: TecnicoCreateComponent
  },
  {
    path: "edit/:id",
    component: TecnicoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicosRoutingModule { }
