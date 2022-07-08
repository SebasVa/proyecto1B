import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
 
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
