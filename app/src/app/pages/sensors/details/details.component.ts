import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Sensor } from '../../../models/sensors.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  sensor:Sensor = null;

  navigationExtras: NavigationExtras = {
    state: {
      sensor:null
    }
  }

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.sensor = navigation?.extras?.state?.sensor;
   }

  ngOnInit(): void {

    //if not exist redirectxxt
    if(typeof this.sensor == 'undefined') {
      this.router.navigate(['list'])
    }
  }

  onGoToEdit():void {
    this.navigationExtras.state.sensor = this.sensor
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onDelete():void {
    alert('delete')
  }

  goBackToList():void {
    this.router.navigate(['list']);
  }

}
