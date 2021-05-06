import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SensorFormComponent } from './sensor-form.component';



@NgModule({
  declarations: [SensorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[SensorFormComponent]
})
export class SensorFormModule { }
