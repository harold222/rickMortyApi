import { SearchInfoCharacter } from "./SearchInfoCharacter.interface";
import { Character } from "./character.interface";

export interface SearchCharacter {
    info: SearchInfoCharacter;
    results: Character[];
}

