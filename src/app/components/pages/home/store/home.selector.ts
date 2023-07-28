import { createSelector } from "@ngrx/store";
import { IHomeState } from "./interfaces/IHomeState";

export const selectHomeState = (state: any) => (
    state.Home
);

export const selectCharacters = createSelector(
    selectHomeState,
    (homeState: IHomeState) => homeState.characters);

export const selectErrorHttp = createSelector(
    selectHomeState,
    (homeState: IHomeState) => homeState.error);

export const selectTotalPages = createSelector(
    selectHomeState,
    (homeState: IHomeState) => homeState.totalPages);

export const selectLoading = createSelector(
    selectHomeState,
    (homeState: IHomeState) => homeState.loading);

export const selectFilter = createSelector(
    selectHomeState,
    (homeState: IHomeState) => homeState.currentFilter);