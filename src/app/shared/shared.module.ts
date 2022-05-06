import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeTogglerIconComponent } from './atoms/dark-mode-toggler-icon/dark-mode-toggler-icon.component';
import { DarkModeTogglerSelectorComponent } from './atoms/dark-mode-toggler-selector/dark-mode-toggler-selector.component';
import { NavbarLinkComponent } from './atoms/navbar-link/navbar-link.component';
import { PageTitleComponent } from './atoms/page-title/page-title.component';
import { ProjectCardComponent } from './molecules/project-card/project-card.component';
import { NavbarBlockComponent } from './molecules/navbar-block/navbar-block.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { TagComponent } from './atoms/tag/tag.component';
import { ArticleCardComponent } from './molecules/article-card/article-card.component';
import { TagsComponent } from './molecules/tags/tags.component';

@NgModule({
  declarations: [
    NavbarLinkComponent,
    NavbarComponent,
    NavbarBlockComponent,
    DarkModeTogglerIconComponent,
    DarkModeTogglerSelectorComponent,
    PageTitleComponent,
    ProjectCardComponent,
    TagComponent,
    ArticleCardComponent,
    TagsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    NavbarBlockComponent,
    PageTitleComponent,
    ProjectCardComponent,
    ArticleCardComponent,
  ],
})
export class SharedModule {}
