import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-side-nav></app-side-nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
