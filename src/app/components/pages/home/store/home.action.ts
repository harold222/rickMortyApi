﻿import { createAction, props } from "@ngrx/store";
import { Character } from '@app/shared/interfaces/characters/character.interface';
import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export const GET_CHARACTERS: string = '[HOME] GET_CHARACTERS';
export const SET_CHARACTERS: string = '[HOME] SET_CHARACTERS';
export const SET_HTTP_ERROR: string = '[HOME] SET_HTTP_ERROR';
export const SET_PAGES: string = '[HOME] SET_PAGES';
export const SET_LOADING: string = '[HOME] SET_LOADING';

export const getCharacters = createAction(
    GET_CHARACTERS,
    props<{ query: string, page: number }>()
);
export const setCharacters = createAction(SET_CHARACTERS, props<{ characters: Character[] }>());
export const setHttpError = createAction(SET_HTTP_ERROR, props<{ error: TrackHttpError }>());
export const setPages = createAction(SET_PAGES, props<{ pages: number }>());
export const setLoading = createAction(SET_LOADING, props<{ loading: boolean }>());