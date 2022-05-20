import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeTogglerIconComponent } from './navbar/dark-mode-toggler-icon/dark-mode-toggler-icon.component';
import { DarkModeTogglerSelectorComponent } from './navbar-block/dark-mode-toggler-selector/dark-mode-toggler-selector.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { TagComponent } from './tag/tag.component';
import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';
import { CardComponent } from './card/card.component';
import { NavbarBlockComponent } from './navbar-block/navbar-block.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    CardComponent,
    CardPlaceholderComponent,
    DarkModeTogglerIconComponent,
    DarkModeTogglerSelectorComponent,
    NavbarBlockComponent,
    NavbarComponent,
    NavbarLinkComponent,
    TagComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardComponent,
    CardPlaceholderComponent,
    NavbarBlockComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}
