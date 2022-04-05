import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLinkComponent } from './atoms/navbar-link/navbar-link.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './molecules/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarLinkComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
