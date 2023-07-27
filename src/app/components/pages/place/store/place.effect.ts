import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PlaceStoreService } from '../service/place.store.service';
import { GET_PLACES, setHttpError, setPlaces } from './place.action';
import { catchError, map, mergeMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PlaceService } from '../../../../shared/services/place.service';
import { SearchPlaces } from '@app/shared/interfaces/places/SearchPlaces.interface';

@Injectable()
export class PlaceEffects {

    public getPlacesEffect$ = createEffect(() => this.actions$.pipe(
        ofType<{ query: string, page: number, type: string }>(GET_PLACES),
        tap(() => this.placeStoreService.setLoading(true)),
        mergeMap((action) =>
            this.placeService.searchPlaces(action.query, action.page).pipe(
                map((response: SearchPlaces) =>
                {
                    this.placeStoreService.setTotalPages(response.info.pages);
                    return setPlaces({ places: response.results })
                }),
                catchError((error: HttpErrorResponse) => {
                    return [setHttpError({ error: this.placeStoreService.handleHttpError(error) })];
                })
            )
        ),
        tap(() => this.placeStoreService.setLoading(false)),
    ));

    constructor(
        private actions$: Actions,
        private placeStoreService: PlaceStoreService,
        private placeService: PlaceService
    ) {
    }
}