import { Component } from '@angular/core';
import { WeatherResponse } from './city-list/city-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response: WeatherResponse;
  show: boolean = false;

  setResponse(response: WeatherResponse) {
    this.response = response;
    this.show = true;
  }
}
