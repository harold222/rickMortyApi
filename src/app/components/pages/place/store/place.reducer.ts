import { IPlaceState } from "./interfaces/IPlaceState";
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './place.action';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export const initialPlaceState: IPlaceState = {
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