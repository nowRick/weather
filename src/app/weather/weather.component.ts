import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherResponse } from '../city-list/city-list.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges{
  @Input() response: WeatherResponse;

  imgSrc: string;

  ngOnChanges(changes: SimpleChanges) {
    const weatherStateAbbr = changes.response.currentValue.consolidated_weather[0].weather_state_abbr;
    this.imgSrc = `https://www.metaweather.com/static/img/weather/ico/${weatherStateAbbr}.ico`;
  }
}
