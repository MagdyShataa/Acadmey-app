import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { DetailsComponent } from './details/details.component';
import { FormModule } from '../form/form.module';


@NgModule({
  declarations: [
    CardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    FormModule
  ]
})
export class CardModule { }
