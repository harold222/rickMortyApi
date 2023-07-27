import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeInfoRoutingModule } from './episode-info-routing.module';
import { EpisodeInfoComponent } from './episode-info.component';
import { SharedModule } from '@app/shared/components/Shared.module';

@NgModule({
  declarations: [
    EpisodeInfoComponent
  ],
  imports: [
    CommonModule,
    EpisodeInfoRoutingModule,
    SharedModule
  ]
})
export class EpisodeInfoModule { }
