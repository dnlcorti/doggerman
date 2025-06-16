import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SessionsCalendarPageComponent } from './sessions-calendar-page.component';

const routes: Routes = [
  { path: '', component: SessionsCalendarPageComponent }
];

@NgModule({
  declarations: [SessionsCalendarPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CalendarModule {}
