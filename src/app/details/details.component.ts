import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationInfo } from '../models/housinglocation';
import { HousingService } from '../services/housing.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  housingLocation: HousingLocationInfo | undefined = undefined;
  applyForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const housingLocationId = Number(routeParams.get('id'));
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((result) => {
        this.housingLocation = result;
      });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
