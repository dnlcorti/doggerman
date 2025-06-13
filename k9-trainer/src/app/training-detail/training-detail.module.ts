import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetailPageComponent } from './training-detail-page.component';

const routes: Routes = [
  { path: ':id', component: TrainingDetailPageComponent }
];

@NgModule({
  declarations: [TrainingDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TrainingDetailModule {}
