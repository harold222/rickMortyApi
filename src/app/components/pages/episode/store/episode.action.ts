import { createAction, props } from "@ngrx/store";
import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export const SET_HTTP_ERROR: string = '[EPISODE] SET_HTTP_ERROR';
export const SET_PAGES: string = '[EPISODE] SET_PAGES';
export const SET_LOADING: string = '[EPISODE] SET_LOADING';

export const setHttpError = createAction(SET_HTTP_ERROR, props<{ error: TrackHttpError }>());
export const setPages = createAction(SET_PAGES, props<{ pages: number }>());
export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());