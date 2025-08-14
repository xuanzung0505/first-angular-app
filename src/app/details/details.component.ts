import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationInfo } from '../models/housinglocation';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  housingLocation: HousingLocationInfo | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const housingLocationId = Number(routeParams.get('id'));
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
