import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { IHomeState } from "../store";
import { Observable } from "rxjs";
import { Character } from "@app/shared/interfaces/characters/character.interface";
import * as selectors from '../store/home.selector';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";
import { setPages, setLoading, filterCharacters } from '../store/home.action';
import { HttpErrorResponse } from "@angular/common/http";
import { FilterCharacter } from "@app/shared/interfaces/characters/FilterCharacter.interface";

@Injectable({
	providedIn: 'root',
})
export class HomeStoreService {

    constructor(private store: Store<IHomeState>) { }

    public handleHttpError = (error: HttpErrorResponse): TrackHttpError =>
        ({
            errorNumber: error.status,
            message: error.statusText,
            friendlyMessage: 'Ha ocurrido un error'
        })

    // public searchCharacters(query: string, page: number = 200): void {
	// 	this.store.dispatch(getCharacters({ page, query }));
	// }

    public filterCharacters(request: FilterCharacter): void {
        this.store.dispatch(filterCharacters({ request }));
    }

    public selectCharacter = (): Observable<Character[]> => this.store.select(selectors.selectCharacters);

    public selectError = (): Observable<TrackHttpError> => this.store.select(selectors.selectErrorHttp);

    public setTotalPages(pages: number) {
        this.store.dispatch(setPages({ pages }));
    }

    public selectTotalPages = (): Observable<number> => this.store.select(selectors.selectTotalPages);

    public selectLoading = (): Observable<boolean> => this.store.select(selectors.selectLoading);

    public setLoading(loading: boolean) {
        this.store.dispatch(setLoading({ loading }));
    }

    public setFilter = (filter: FilterCharacter) => this.store.dispatch(filterCharacters({ request: filter }));

    public selectFilter = (): Observable<FilterCharacter> => this.store.select(selectors.selectFilter);
}