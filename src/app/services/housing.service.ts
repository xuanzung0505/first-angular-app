import { Injectable } from '@angular/core';
import {
  HousingLocationInfo,
  housingLocationList,
} from '../models/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList: HousingLocationInfo[] = [...housingLocationList];
  constructor() {}

  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
