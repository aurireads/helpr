import { ExitComponent } from './utils/exit/exit.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },

  {
    path: "home",
    loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tecnicos',
    loadChildren: () => import('./components/tecnicos/tecnicos.module').then(m => m.TecnicosModule),
    canActivate: [AuthGuard]
  },
  {
    path: "logout",
    component: ExitComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
