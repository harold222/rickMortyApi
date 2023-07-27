import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeContainerComponent } from './container/episode.container.component';
import { EpisodeComponent } from './component/episode.component';
import { EpisodeListContainerComponent } from './component/episode-list/container/episode-list.container.component';
import { EpisodeSingleComponent } from './component/episode-list/component/episode-single.component';
import { EpisodeDetailComponent } from './component/episode-detail/episode-detail.component';
import { SharedModule } from '@app/shared/components/Shared.module';

@NgModule({
  declarations: [
    EpisodeContainerComponent,
    EpisodeComponent,
    EpisodeListContainerComponent,
    EpisodeSingleComponent,
    EpisodeDetailComponent,
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    SharedModule
  ]
})
export class EpisodeModule { }
