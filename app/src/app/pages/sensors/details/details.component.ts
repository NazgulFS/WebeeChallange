import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  sensor = null;

  navigationExtras: NavigationExtras = {
    state: {
      sensor:null
    }
  }

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.sensor = navigation?.extras?.state;
   }

  ngOnInit(): void {
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
