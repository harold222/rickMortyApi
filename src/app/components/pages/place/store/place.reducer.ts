import { IPlaceState } from "./interfaces/IPlaceState";
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './place.action';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export const initialPlaceState: IPlaceState = {
    places: [],
    error: {
        errorNumber: 0,
        friendlyMessage: '',
        message: ''
    },
    totalPages: 0,
    loading: false,
};

export const shared = createReducer(
    initialPlaceState,
    on(actions.setPlaces, (state: IPlaceState, action: { places: any[] }) => {
        const newState: IPlaceState = { ...state};
        newState.places = action.places;
        return newState;
    }),
    on(actions.setHttpError, (state: IPlaceState, action: { error: TrackHttpError }) => {
        const newState: IPlaceState = { ...state};
        newState.error = action.error;
        return newState;
    }),
    on(actions.setPages, (state: IPlaceState, action: { pages: number }) => {
        const newState: IPlaceState = { ...state};
        newState.totalPages = action.pages;
        return newState;
    }),
    on(actions.setLoading, (state: IPlaceState, action: { loading: boolean }) => {
        const newState: IPlaceState = { ...state};
        newState.loading = action.loading;
        return newState;
    }),
);

export function reducer(state: IPlaceState | undefined, action: Action): IPlaceState {
    return shared(state, action);
}