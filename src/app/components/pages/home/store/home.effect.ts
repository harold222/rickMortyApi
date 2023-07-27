import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GET_CHARACTERS, setCharacters, setHttpError, setLoading } from './home.action';
import { mergeMap, map, tap, catchError, filter } from 'rxjs/operators';
import { CharacterService } from '@app/shared/services/character.service';
import { Character } from '@app/shared/interfaces/characters/character.interface';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';
import { HomeStoreService } from '../service/home.store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SearchCharacter } from '../../../../shared/interfaces/characters/SearchCharacter.interface';

@Injectable()
export class HomeEffects {

    public getCHaracterEffect$ = createEffect(() => this.actions$.pipe(
        ofType<{ query: string, page: number, type: string }>(GET_CHARACTERS),
        tap(() => this.homeStoreService.setLoading(true)),
        mergeMap((action) =>
            this.characterService.searchCharacters(action.query, action.page).pipe(
                map((response: SearchCharacter) =>
                {
                    this.homeStoreService.setTotalPages(response.info.pages);
                    return setCharacters({ characters: response.results })
                }),
                catchError((error: HttpErrorResponse) => {
                    return [setHttpError({ error: this.homeStoreService.handleHttpError(error) })];
                })
            )
        ),
        tap(() => this.homeStoreService.setLoading(false)),
    ));

    constructor(
        private actions$: Actions,
        private characterService: CharacterService,
        private homeStoreService: HomeStoreService
    ) {
    }
}