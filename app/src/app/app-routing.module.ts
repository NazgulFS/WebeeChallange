import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component'

const routes: Routes = [

  { path: 'register', component: RegisterComponent  },
  { path: 'login', loadChildren: () => import('./auth/login/auth.module').then(m => m.AuthModule) },
  { path: 'list', loadChildren: () => import('./pages/sensors/list/list.module').then(m => m.ListModule) },
  { path: 'new', loadChildren: () => import('./pages/sensors/new/new.module').then(m => m.NewModule) },
  { path: 'details', loadChildren: () => import('./pages/sensors/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./pages/sensors/edit/edit.module').then(m => m.EditModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
