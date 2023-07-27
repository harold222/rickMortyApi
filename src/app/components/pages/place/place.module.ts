import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from '@app/shared/components/loading/loading.component';
import { PlaceRoutingModule } from './place-routing.module';
import { PlaceContainerComponent } from './container/place.container.component';
import { PlaceComponent } from './component/place.component';
import { PlaceSingleComponent } from './component/place-list/component/place-single.component';
import { PlaceListContainerComponent } from './component/place-list/container/place-list.container.component';

@NgModule({
  declarations: [
    PlaceContainerComponent,
    PlaceComponent,
    LoadingComponent,
    PlaceSingleComponent,
    PlaceListContainerComponent
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
  ]
})
export class PlaceModule { }
