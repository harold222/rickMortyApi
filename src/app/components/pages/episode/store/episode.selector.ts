import { createSelector } from "@ngrx/store";
import { IEpisodeState } from "./interfaces/IEpisodeState";

export const selectEpisodeState = (state: any) => (
    state.Episode
);

export const selectErrorHttp = createSelector(
    selectEpisodeState,
    (homeState: IEpisodeState) => homeState.error);

export const selectTotalPages = createSelector(
    selectEpisodeState,
    (homeState: IEpisodeState) => homeState.totalPages);

export const selectLoading = createSelector(
    selectEpisodeState,
    (homeState: IEpisodeState) => homeState.loading);