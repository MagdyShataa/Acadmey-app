import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlugRoutingModule } from './blug-routing.module';
import { BlugComponent } from './blug.component';


@NgModule({
  declarations: [
    BlugComponent
  ],
  imports: [
    CommonModule,
    BlugRoutingModule
  ]
})
export class BlugModule { }
