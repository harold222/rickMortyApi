import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EpisodeStoreService } from '../service/episode.store.service';
import { EpisodeService } from '@app/shared/services/episode.service';
import { GET_EPISODES, setEpisodes, setHttpError } from './episode.action';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { SearchEpisodes } from '@app/shared/interfaces/episodes/SearchEpisodes.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EpisodeEffects {

    public getEpisodesEffect$ = createEffect(() => this.actions$.pipe(
        ofType<{ query: string, page: number, type: string }>(GET_EPISODES),
        tap(() => this.episodeStoreService.setLoading(true)),
        mergeMap((action) =>
            this.episodeService.searchEpisodes(action.query, action.page).pipe(
                map((response: SearchEpisodes) =>
                {
                    return setEpisodes({ episodes: response.results })
                }),
                catchError((error: HttpErrorResponse) => {
                    return [setHttpError({ error: this.episodeStoreService.handleHttpError(error) })];
                })
            )
        ),
        tap(() => this.episodeStoreService.setLoading(false)),
    ));

    constructor(
        private actions$: Actions,
        private episodeStoreService: EpisodeStoreService,
        private episodeService: EpisodeService
    ) {
    }
}