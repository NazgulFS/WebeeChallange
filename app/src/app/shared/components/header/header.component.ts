import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _route: boolean;
  currentURL='';

  constructor(
  ) { 
    this.currentURL = window.location.href;
    console.log(this.currentURL)
    this._route = this.currentURL.includes('register' || 'login')
    console.log(this._route)
  }

  ngOnInit(): void {
  }
}
