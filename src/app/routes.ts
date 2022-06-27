import { Routes } from "@angular/router";
import { HomeComponent, AboutMeComponent, BlogComponent, MyProjectsComponent } from "./pages";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
