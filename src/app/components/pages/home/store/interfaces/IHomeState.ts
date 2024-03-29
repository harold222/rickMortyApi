﻿import { FilterCharacter } from "@app/shared/interfaces/characters/FilterCharacter.interface";
import { Character } from "@app/shared/interfaces/characters/character.interface";
import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export interface IHomeState {
    characters: Character[],
    error: TrackHttpError,
    totalPages: number,
    loading: boolean,
    currentFilter: FilterCharacter;
}