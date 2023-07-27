import { Injectable } from '@angular/core';
import { Actions } from "@ngrx/effects";
import { PlaceStoreService } from '../service/place.store.service';

@Injectable()
export class PlaceEffects {

    constructor(
        private actions$: Actions,
        private placeStoreService: PlaceStoreService
    ) {
    }
}