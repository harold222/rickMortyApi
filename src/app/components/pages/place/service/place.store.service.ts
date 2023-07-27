import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { IPlaceState } from "../store";
import { Observable } from "rxjs";
import * as selectors from '../store/place.selector';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";
import {  setPages, setLoading } from '../store/place.action';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
	providedIn: 'root',
})
export class PlaceStoreService {

    constructor(private store: Store<IPlaceState>) { }

    public handleHttpError = (error: HttpErrorResponse): TrackHttpError =>
        ({
            errorNumber: error.status,
            message: error.statusText,
            friendlyMessage: 'Ha ocurrido un error'
        })

    public selectError = (): Observable<TrackHttpError> => this.store.select(selectors.selectErrorHttp);

    public setTotalPages(pages: number) {
        this.store.dispatch(setPages({ pages }));
    }

    public selectTotalPages = (): Observable<number> => this.store.select(selectors.selectTotalPages);

    public selectLoading = (): Observable<boolean> => this.store.select(selectors.selectLoading);

    public setLoading(loading: boolean) {
        this.store.dispatch(setLoading({ loading }));
    }
}