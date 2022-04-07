import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeTogglerIconComponent } from './atoms/dark-mode-toggler-icon/dark-mode-toggler-icon.component';
import { DarkModeTogglerSelectorComponent } from './atoms/dark-mode-toggler-selector/dark-mode-toggler-selector.component';
import { NavbarLinkComponent } from './atoms/navbar-link/navbar-link.component';
import { PageTitleComponent } from './atoms/page-title/page-title.component';
import { NavbarBlockComponent } from './molecules/navbar-block/navbar-block.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarLinkComponent,
    NavbarComponent,
    NavbarBlockComponent,
    DarkModeTogglerIconComponent,
    DarkModeTogglerSelectorComponent,
    PageTitleComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, NavbarBlockComponent, PageTitleComponent],
})
export class SharedModule {}
