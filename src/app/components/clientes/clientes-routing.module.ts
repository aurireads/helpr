import { ClienteCreateComponent } from './children/cliente-create/cliente-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClienteUpdateComponent } from './children/cliente-update/cliente-update.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: "new",
    component: ClienteCreateComponent
  },
  {
    path: "edit/:id",
    component: ClienteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
