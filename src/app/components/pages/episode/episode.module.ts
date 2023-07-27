import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from '@app/shared/components/loading/loading.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeContainerComponent } from './container/episode.container.component';
import { EpisodeComponent } from './component/episode.component';
import { EpisodeListContainerComponent } from './component/episode-list/container/episode-list.container.component';
import { EpisodeSingleComponent } from './component/episode-list/component/episode-single.component';
import { EpisodeDetailComponent } from './component/episode-detail/episode-detail.component';

@NgModule({
  declarations: [
    EpisodeContainerComponent,
    EpisodeComponent,
    LoadingComponent,
    EpisodeListContainerComponent,
    EpisodeSingleComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
  ]
})
export class EpisodeModule { }
