import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cities: string[] = ["Moscow", "St Petersburg", "Kiev", "Minsk"];

// Moscow,        2122265
// St Petersburg, 2123260
// Kiev,          924938
// Minsk,         834463

  getCities(): string[] {
    return this.cities;
  }

  constructor() { }
}