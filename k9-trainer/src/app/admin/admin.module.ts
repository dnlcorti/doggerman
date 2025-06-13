import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatsPageComponent } from './stats-page/stats-page.component';

const routes: Routes = [
  { path: '', component: StatsPageComponent }
];

@NgModule({
  declarations: [StatsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdminModule {}
