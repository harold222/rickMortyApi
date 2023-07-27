import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { IEpisodeState } from "../store";
import { Observable } from "rxjs";
import * as selectors from '../store/episode.selector';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";
import {  setPages, setLoading, getEpisodes } from '../store/episode.action';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
	providedIn: 'root',
})
export class EpisodeStoreService {

    constructor(private store: Store<IEpisodeState>) { }

    public searchEpisodes(query: string, page: number = 200): void {
		this.store.dispatch(getEpisodes({ page, query }));
	}

    public handleHttpError = (error: HttpErrorResponse): TrackHttpError =>
        ({
            errorNumber: error.status,
            message: error.statusText,
            friendlyMessage: 'Ha ocurrido un error'
        })

    public selectEpisodes = (): Observable<any[]> => this.store.select(selectors.selectEpisodes);

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