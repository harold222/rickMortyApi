import { Injectable } from '@angular/core';
import { Actions } from "@ngrx/effects";
import { EpisodeStoreService } from '../service/episode.store.service';

@Injectable()
export class EpisodeEffects {

    constructor(
        private actions$: Actions,
        private episodeStoreService: EpisodeStoreService
    ) {
    }
}