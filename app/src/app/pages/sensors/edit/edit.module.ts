import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SensorFormModule } from 'src/app/shared/components/sensor-form/sensor-form.module';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    SensorFormModule
  ]
})
export class EditModule { }
