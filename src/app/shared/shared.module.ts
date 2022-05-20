import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';
import { CardComponent } from './card/card.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    CardComponent,
    CardPlaceholderComponent,
    TagComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CardComponent,
    CardPlaceholderComponent,
  ],
})
export class SharedModule {}
