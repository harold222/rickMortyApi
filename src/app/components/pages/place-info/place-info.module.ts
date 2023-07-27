import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceInfoRoutingModule } from './place-info-routing.module';
import { PlaceInfoComponent } from './place-info.component';
import { SharedModule } from '@app/shared/components/Shared.module';

@NgModule({
  declarations: [
    PlaceInfoComponent
  ],
  imports: [
    CommonModule,
    PlaceInfoRoutingModule,
    SharedModule
  ]
})
export class PlaceInfoModule { }
