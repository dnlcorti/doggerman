import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConversationsPageComponent } from './conversations-page.component';

const routes: Routes = [
  { path: '', component: ConversationsPageComponent }
];

@NgModule({
  declarations: [ConversationsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MessagingModule {}
