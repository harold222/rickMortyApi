import { createAction, props } from "@ngrx/store";
import { TrackHttpError } from "@app/shared/models/TrackHttpError";


export const GET_PLACES: string = '[PLACE] GET_EPISODES';
export const SET_PLACES: string = '[PLACE] SET_EPISODES';
export const SET_HTTP_ERROR: string = '[PLACE] SET_HTTP_ERROR';
export const SET_PAGES: string = '[PLACE] SET_PAGES';
export const SET_LOADING: string = '[PLACE] SET_LOADING';

export const getPlaces = createAction(
    GET_PLACES,
    props<{ query: string, page: number }>()
);
export const setPlaces = createAction(SET_PLACES, props<{ places: any[] }>());


export const setHttpError = createAction(SET_HTTP_ERROR, props<{ error: TrackHttpError }>());
export const setPages = createAction(SET_PAGES, props<{ pages: number }>());
export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());