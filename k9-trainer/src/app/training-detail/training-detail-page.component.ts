import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-detail-page',
  templateUrl: './training-detail-page.component.html'
})
export class TrainingDetailPageComponent {
  constructor(public route: ActivatedRoute) {}
}
