import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeStoreService } from '../service/episode.store.service';

@Component({
  selector: 'app-episode-container',
  templateUrl: './episode.container.component.html'
})
export class EpisodeContainerComponent {

  public loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private episodeStoreService: EpisodeStoreService) {
    this.loading$ = this.episodeStoreService.selectLoading();
  }

}
