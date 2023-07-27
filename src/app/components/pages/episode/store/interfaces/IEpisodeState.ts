import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export interface IEpisodeState {
    episodes: any[],
    error: TrackHttpError,
    totalPages: number,
    loading: boolean,
}