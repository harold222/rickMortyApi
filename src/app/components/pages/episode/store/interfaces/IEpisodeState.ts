import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export interface IEpisodeState {
    error: TrackHttpError,
    totalPages: number,
    loading: boolean,
}