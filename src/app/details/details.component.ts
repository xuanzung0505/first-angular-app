import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  housingLocationId: number = -1;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const housingId = Number(routeParams.get('id'));
    this.housingLocationId = housingId;
    // Find the product that correspond with the id provided in route.
  }
}
