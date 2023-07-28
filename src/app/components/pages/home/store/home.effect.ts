import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FILTER_CHARACTERS, setCharacters, setHttpError, setLoading } from './home.action';
import { mergeMap, map, tap, catchError, filter } from 'rxjs/operators';
import { CharacterService } from '@app/shared/services/character.service';
import { HomeStoreService } from '../service/home.store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SearchCharacter } from '../../../../shared/interfaces/characters/SearchCharacter.interface';
import { FilterCharacter } from '@app/shared/interfaces/characters/FilterCharacter.interface';

@Injectable()
export class HomeEffects {

    public getFilterCHaracterEffect$ = createEffect(() => this.actions$.pipe(
        ofType<{ request: FilterCharacter, type: string }>(FILTER_CHARACTERS),
        tap(() => this.homeStoreService.setLoading(true)),
        mergeMap((action) =>
            this.characterService.filterCharacters(action.request).pipe(
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