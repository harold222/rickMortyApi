import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeStoreService } from '../service/episode.store.service';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';

@Component({
  selector: 'app-episode-container',
  templateUrl: './episode.container.component.html'
})
export class EpisodeContainerComponent {

  public loading$: Observable<boolean> = new Observable<boolean>();
  public error$: Observable<TrackHttpError> = new Observable<TrackHttpError>();

  constructor(private episodeStoreService: EpisodeStoreService) {
    this.loading$ = this.episodeStoreService.selectLoading();
    this.error$ = this.episodeStoreService.selectError();
  }

}
