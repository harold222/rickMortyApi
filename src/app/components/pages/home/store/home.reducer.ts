import { IHomeState } from "./interfaces/IHomeState";
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './home.action';
import { Character } from "@app/shared/interfaces/characters/character.interface";
import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export const initialHomeState: IHomeState = {
    characters: [],
    error: {
        errorNumber: 0,
        friendlyMessage: '',
        message: ''
    },
    totalPages: 0,
    loading: false,
};

export const shared = createReducer(
    initialHomeState,
    on(actions.setCharacters, (state: IHomeState, action: { characters: Character[] }) => {
        const newState: IHomeState = { ...state};
        newState.characters = action.characters;
        return newState;
    }),
    on(actions.setHttpError, (state: IHomeState, action: { error: TrackHttpError }) => {
        const newState: IHomeState = { ...state};
        newState.error = action.error;
        return newState;
    }),
    on(actions.setPages, (state: IHomeState, action: { pages: number }) => {
        const newState: IHomeState = { ...state};
        newState.totalPages = action.pages;
        return newState;
    }),
    on(actions.setLoading, (state: IHomeState, action: { loading: boolean }) => {
        const newState: IHomeState = { ...state};
        newState.loading = action.loading;
        return newState;
    }),
);

export function reducer(state: IHomeState | undefined, action: Action): IHomeState {
    return shared(state, action);
}