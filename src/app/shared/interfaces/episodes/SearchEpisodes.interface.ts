import { SearchInfoCharacter } from "../characters/SearchInfoCharacter.interface";
import { EpisodeInfo } from "./EpisodeInfo.interface";

export interface SearchEpisodes {
    info: SearchInfoCharacter;
    results: EpisodeInfo[];
}