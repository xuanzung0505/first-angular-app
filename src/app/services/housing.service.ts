import { Injectable } from '@angular/core';
import {
  HousingLocationInfo,
  housingLocationList,
} from '../models/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  housingLocationList: HousingLocationInfo[] = [];

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    this.housingLocationList = await (await fetch(this.url)).json();
    return this.housingLocationList;
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocationInfo | undefined> {
    return await (await fetch(`${this.url}/${id}`)).json();
  }

  filterHousingLocationByCity(city: string): HousingLocationInfo[] {
    const regex = new RegExp(city, 'i');
    return this.housingLocationList.filter((val) => {
      return regex.test(val.city);
    });
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
