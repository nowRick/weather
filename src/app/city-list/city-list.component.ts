import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
  providers: [WeatherService]
})
export class CityListComponent implements OnInit {

  cities: string[] = [];
  response: any;

  constructor(private weatherService: WeatherService, private http: HttpClient) { }
  
  getWeather() {
    this.http.get('api/location/2122265/')
    .subscribe((response) => {
      this.response = response;
      console.log(response);
      console.log(response['consolidated_weather']);
      
    });
  }

  ngOnInit(): void {
    this.cities = this.weatherService.getCities();
  }
  
  // @Output() cityId = new EventEmitter<string>();
  
  // getWeatherByCityId(value: string) {
  //   this.cityId
  // }
}
