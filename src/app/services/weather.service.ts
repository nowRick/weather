import { Injectable } from '@angular/core';

export interface City {
  name: string;
  woeid: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private cities: City[] = [ 
    {
      name: "Moscow",
      woeid: 2122265,
    },
    {
      name: "St Petersburg",
      woeid: 2123260,
    },
    {
      name: "Kiev",
      woeid: 924938,
    },
    {
      name: "Minsk",
      woeid: 834463,
    }
  ];

  getCities(): City[] {
    return this.cities;
  }

  constructor() { }
}