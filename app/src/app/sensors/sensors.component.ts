import { Component, OnInit } from '@angular/core';
import { Sensor } from '../models/sensors.model';
import { SensorsService } from '../services/sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  constructor(
    private sensorService: SensorsService
  ) {     
    this.retrieveSensors();
  }

  ngOnInit(): void {

    this.getSensor("60931ba51c8d17a1d88aecda")
  }

  headers: string[] = ['Name', 'Active', 'minval', 'maxval'];
  allSensors:Sensor[];
  aSensor:Sensor;

  retrieveSensors() {
    this.sensorService.getAllSensors().subscribe(req => {
      this.allSensors = req.data.doc
      console.log(this.allSensors)
    });
  }

  getSensor(id) {
    this.sensorService.getSensorById(id).subscribe(req => {
      this.aSensor = req.data.doc.name;
      console.log(this.aSensor)
    })
  }
}
