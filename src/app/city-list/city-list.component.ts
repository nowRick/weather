import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City, WeatherService } from '../services/weather.service';
import { HttpClient } from '@angular/common/http';

export interface WeatherResponse {
  consolidated_weather: ConsolidatedWeather[];
  latt_long: string;
  location_type: string;
  parent: any;
  sources: any[];
  sun_rise: string;
  sun_set: string;
  time: Date;
  timezone: string;
  timezone_name: string;
  title: string;
  woeid: number;
}

export interface ConsolidatedWeather {
  id: number;
  applicable_date: Date;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  max_temp: string;
  min_temp: string;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
  providers: [WeatherService]
})
export class CityListComponent implements OnInit {

  cities: City[];
  response: WeatherResponse;
  selectedCity: City;

  constructor(private weatherService: WeatherService, private http: HttpClient) {
  }
  
  @Output() citySelected = new EventEmitter<WeatherResponse>();

  getWeather(city: City): void {
    this.selectedCity = city;

    this.http.get(`api/location/${city.woeid}/`)
      .subscribe((response: WeatherResponse) => {
        this.response = response;
        this.citySelected.emit(response);
      });
  }

  ngOnInit(): void {
    this.cities = this.weatherService.getCities();
  }
}
