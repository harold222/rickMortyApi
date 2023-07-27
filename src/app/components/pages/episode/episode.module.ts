import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from '@app/shared/components/loading/loading.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeContainerComponent } from './container/episode.container.component';
import { EpisodeComponent } from './component/episode.component';

@NgModule({
  declarations: [
    EpisodeContainerComponent,
    EpisodeComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
  ]
})
export class EpisodeModule { }
