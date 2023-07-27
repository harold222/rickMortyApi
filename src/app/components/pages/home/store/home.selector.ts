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