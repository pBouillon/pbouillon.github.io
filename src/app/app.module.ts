import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeTogglerSelectorComponent } from './core/components/navbar-block/dark-mode-toggler-selector/dark-mode-toggler-selector.component';
import { NavbarBlockComponent } from './core/components/navbar-block/navbar-block.component';
import { NavbarLinkComponent } from './core/components/navbar-link/navbar-link.component';
import { DarkModeTogglerIconComponent } from './core/components/navbar/dark-mode-toggler-icon/dark-mode-toggler-icon.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { SharedModule } from './shared/shared.module';

const coreComponents = [
  DarkModeTogglerIconComponent,
  DarkModeTogglerSelectorComponent,
  NavbarComponent,
  NavbarBlockComponent,
  NavbarLinkComponent,
];

const pages = [
  HomeComponent,
  AboutMeComponent,
  MyProjectsComponent,
  BlogComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    [...coreComponents],
    [...pages],
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
