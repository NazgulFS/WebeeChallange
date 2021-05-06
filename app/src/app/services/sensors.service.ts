import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { Sensor } from '../models/sensors.model';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  constructor(private httpClient: HttpClient) {}

  getAllSensors(): Observable<any> {
    return this.httpClient.get(SERVER_API_URL + '/');
  }

  getSensorById(sensor_id:string): Observable<any> {
    return this.httpClient.get(`${SERVER_API_URL}/${sensor_id}`)
  }

  createNewSensor(body:Sensor) {
    return this.httpClient.post(SERVER_API_URL + '/', body);
  }

  editSensorById(sensor_id:string, body:Sensor) {
    return this.httpClient.patch(`${SERVER_API_URL}/${sensor_id}`, body);
  }

  onDelete(sensor_id:string) {
    return this.httpClient.delete(`${SERVER_API_URL}/${sensor_id}`);
  }

}
