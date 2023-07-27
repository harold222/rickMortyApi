import { SearchInfoCharacter } from "../characters/SearchInfoCharacter.interface";
import { PlaceInfoInterface } from "./PlaceInfo.interface";

export interface SearchPlaces {
    info: SearchInfoCharacter;
    results: PlaceInfoInterface[];
}