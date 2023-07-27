import { createSelector } from "@ngrx/store";
import { IPlaceState } from "./interfaces/IPlaceState";

export const selectPlaceState = (state: any) => (
    state.Place
);

export const selectPlaces = createSelector(
    selectPlaceState,
    (homeState: IPlaceState) => homeState.places);

export const selectErrorHttp = createSelector(
    selectPlaceState,
    (homeState: IPlaceState) => homeState.error);

export const selectTotalPages = createSelector(
    selectPlaceState,
    (homeState: IPlaceState) => homeState.totalPages);

export const selectLoading = createSelector(
    selectPlaceState,
    (homeState: IPlaceState) => homeState.loading);