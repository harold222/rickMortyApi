import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { IHomeState } from "../store";
import { Observable } from "rxjs";
import { Character } from "@app/shared/interfaces/character.interface";
import * as selectors from '../store/home.selector';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";
import { getCharacters } from '../store/home.action';

@Injectable({
	providedIn: 'root',
})
export class HomeStoreService {

    constructor(private store: Store<IHomeState>) { }

    public getHome(query: string, page: number = 200): void {
		this.store.dispatch(getCharacters({ page, query }));
	}

    public selectCharacter = (): Observable<Character[]> => this.store.select(selectors.selectCharacters);

    public selectError = (): Observable<TrackHttpError> => this.store.select(selectors.selectErrorHttp);

}