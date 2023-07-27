import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { EpisodeInfo } from '../interfaces/episodes/EpisodeInfo.interface';
import { TrackHttpError } from '../models/TrackHttpError';
import { catchError } from 'rxjs/operators';
import { SearchPlaces } from '../interfaces/places/SearchPlaces.interface';
import { PlaceInfoInterface } from '../interfaces/places/PlaceInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  searchPlaces(query = '', page = 200): Observable<SearchPlaces> {
    const filter = `${environment.baseUrlAPI}location/?name=${query}&page=${page}`;
    return this.http.get<any>(filter);
  }

  getDetails(id: number): Observable<PlaceInfoInterface | TrackHttpError> {
    return this.http.get<PlaceInfoInterface>(
      `${environment.baseUrlAPI}location/${id}`
      )
      .pipe(
        catchError(
          (err) => this.handleHttpError(err)
        )
      );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<TrackHttpError>{
    const dataError: TrackHttpError = {
      errorNumber: error.status,
      message: error.statusText,
      friendlyMessage: 'Ha ocurrido un error'
    }
    return throwError(dataError);
  }
}
