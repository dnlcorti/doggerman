import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingTypesListPageComponent } from './training-types-list-page.component';

const routes: Routes = [
  { path: '', component: TrainingTypesListPageComponent }
];

@NgModule({
  declarations: [TrainingTypesListPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TrainingTypesModule {}
