import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export interface IPlaceState {
    error: TrackHttpError,
    totalPages: number,
    loading: boolean,
}