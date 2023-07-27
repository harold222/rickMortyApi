import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GET_CHARACTERS, setCharacters, setHttpError } from './home.action';
import { mergeMap, map, tap } from 'rxjs/operators';
import { CharacterService } from '@app/shared/services/character.service';
import { Character } from '@app/shared/interfaces/character.interface';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';

@Injectable()
export class HomeEffects {

    public getNavigationEffect$ = createEffect(() => this.actions$.pipe(
        ofType(GET_CHARACTERS),
        mergeMap(() =>
            this.characterService.searchCharacters('', 200)
        ),
        map((response: Character[] | TrackHttpError) =>
        {
            if (response instanceof TrackHttpError)
                return setHttpError({ error: response })
            else
                return setCharacters({ characters: response })
        })
    ));

    constructor(
        private actions$: Actions,
        private characterService: CharacterService,
    ) {
    }
}