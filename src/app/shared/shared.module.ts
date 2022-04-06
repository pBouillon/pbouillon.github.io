import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLinkComponent } from './atoms/navbar-link/navbar-link.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { NavbarBlockComponent } from './molecules/navbar-block/navbar-block.component';
import { DarkModeTogglerIconComponent } from './atoms/dark-mode-toggler-icon/dark-mode-toggler-icon.component';
import { DarkModeTogglerSelectorComponent } from './atoms/dark-mode-toggler-selector/dark-mode-toggler-selector.component';



@NgModule({
  declarations: [
    NavbarLinkComponent,
    NavbarComponent,
    NavbarBlockComponent,
    DarkModeTogglerIconComponent,
    DarkModeTogglerSelectorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    NavbarBlockComponent,
  ],
})
export class SharedModule { }
