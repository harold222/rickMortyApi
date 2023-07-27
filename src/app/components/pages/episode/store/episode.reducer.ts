import { IEpisodeState } from "./interfaces/IEpisodeState";
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './episode.action';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export const initialEpisodeState: IEpisodeState = {
    error: {
        errorNumber: 0,
        friendlyMessage: '',
        message: ''
    },
    totalPages: 0,
    loading: false,
};

export const shared = createReducer(
    initialEpisodeState,
    on(actions.setHttpError, (state: IEpisodeState, action: { error: TrackHttpError }) => {
        const newState: IEpisodeState = { ...state};
        newState.error = action.error;
        return newState;
    }),
    on(actions.setPages, (state: IEpisodeState, action: { pages: number }) => {
        const newState: IEpisodeState = { ...state};
        newState.totalPages = action.pages;
        return newState;
    }),
    on(actions.setLoading, (state: IEpisodeState, action: { loading: boolean }) => {
        const newState: IEpisodeState = { ...state};
        newState.loading = action.loading;
        return newState;
    }),
);

export function reducer(state: IEpisodeState | undefined, action: Action): IEpisodeState {
    return shared(state, action);
}