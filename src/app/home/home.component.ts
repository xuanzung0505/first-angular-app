import { Component } from '@angular/core';
import {
  HousingLocationInfo,
  housingLocationList,
} from '../models/housinglocation';
import { HousingService } from '../services/housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocations: HousingLocationInfo[] = [];

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.forEach((paramMap) => {
      const city = paramMap.get('city');
      if (city === null)
        this.housingLocations = this.housingService.getAllHousingLocations();
      else
        this.housingLocations =
          this.housingService.filterHousingLocationByCity(city);
    });
  }

  searchHousingByCity(city: string) {
    this.housingLocations =
      this.housingService.filterHousingLocationByCity(city);
  }
}
