import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLinkComponent } from './atoms/navbar-link/navbar-link.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { NavbarBlockComponent } from './molecules/navbar-block/navbar-block.component';



@NgModule({
  declarations: [
    NavbarLinkComponent,
    NavbarComponent,
    NavbarBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
