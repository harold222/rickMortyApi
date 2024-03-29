﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceContainerComponent } from './container/place.container.component';
import { PlaceComponent } from './component/place.component';
import { PlaceSingleComponent } from './component/place-list/component/place-single.component';
import { PlaceListContainerComponent } from './component/place-list/container/place-list.container.component';
import { SharedModule } from '@app/shared/components/Shared.module';
import { PlacesDetailComponent } from './component/place-detail/place-detail.component';

@NgModule({
  declarations: [
    PlaceContainerComponent,
    PlaceComponent,
    PlaceSingleComponent,
    PlaceListContainerComponent,
    PlacesDetailComponent
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    SharedModule
  ]
})
export class PlaceModule { }
