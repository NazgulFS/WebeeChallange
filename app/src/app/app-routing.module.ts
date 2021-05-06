import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorsComponent } from './sensors/sensors.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: SensorsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
