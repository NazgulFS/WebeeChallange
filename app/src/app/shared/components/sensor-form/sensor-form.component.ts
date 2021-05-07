import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sensor } from 'src/app/models/sensors.model';
import { SensorsService } from 'src/app/services/sensors.service';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.css']
})
export class SensorFormComponent implements OnInit {

  sensor:Sensor = null;
  sensorForm: FormGroup;

  constructor( 
    private router:Router, 
    private fb: FormBuilder, 
    private sensorService: SensorsService,
    ) {
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

  isValidField(field: any):any {
    const validatedField = this.sensorForm.get(field);
    if(validatedField != null) {
      return(!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : ''
    }
  }

  onSave():void {
    if(this.sensorForm.valid) {
      console.warn(this.sensorForm.valid)
      const sensor = this.sensorForm.value;
      const id = this.sensor?._id || null;
      console.log(id)
      if(id != null) {
        this.sensorService.editSensorById(id, sensor).subscribe((res) => {
          console.info('Sensor edited', res);
          this.router.navigate(['list']);
        })
      } else {
        this.sensorService.createNewSensor(sensor).subscribe((res) => {
          console.info('Sensor created', res);
          this.sensorForm.reset()
        })
      }
    }
  }

  goBackToList():void {
    this.router.navigate(['list']);
  }

  private initForm():void {
    this.sensorForm = this.fb.group({
      name: ['', [Validators.required]],
      location: [''],
      active: [''],
      minval: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      maxval: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })
  }
}
