import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sensor } from 'src/app/models/sensors.model';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.css']
})
export class SensorFormComponent implements OnInit {

  sensor:Sensor = null;
  sensorForm: FormGroup;
  private

  constructor( private router:Router, private fb: FormBuilder ) {
    const navigation = this.router.getCurrentNavigation();
    this.sensor = navigation?.extras?.state?.sensor;
    this.initForm();
   }

  ngOnInit(): void {

    if(typeof this.sensor == 'undefined') {
      //redirect if not exist
      this.router.navigate(['new']);
    } else {
      this.sensorForm.patchValue(this.sensor);
    }

  }

  onSave():void {
    console.log('saved', this.sensorForm.value)
  }

  goBackToList():void {
    this.router.navigate(['list']);
  }

  private initForm():void {
    this.sensorForm = this.fb.group({
      name: ['', [Validators.required]],
      minval: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      maxval: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })
  }
}
