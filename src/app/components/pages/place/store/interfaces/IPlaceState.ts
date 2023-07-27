import { TrackHttpError } from "@app/shared/models/TrackHttpError";

export interface IPlaceState {
    places: any[],
    error: TrackHttpError,
    totalPages: number,
    loading: boolean,
}