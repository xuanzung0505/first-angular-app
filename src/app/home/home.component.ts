import { Component } from '@angular/core';
import {
  HousingLocationInfo,
  housingLocationList,
} from '../models/housinglocation';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocations: HousingLocationInfo[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocations = housingService.getAllHousingLocations();
  }
}
