import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [HeaderComponent, FooterComponent, SideNavComponent],
  providers: [AuthService]
})
export class CoreModule {}
