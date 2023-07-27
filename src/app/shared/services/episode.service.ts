import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { SearchEpisodes } from '../interfaces/episodes/SearchEpisodes.interface';
import { EpisodeInfo } from '../interfaces/episodes/EpisodeInfo.interface';
import { TrackHttpError } from '../models/TrackHttpError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  searchEpisodes(query = '', page = 200): Observable<SearchEpisodes> {
    const filter = `${environment.baseUrlAPI}/episode/?name=${query}&page=${page}`;
    return this.http.get<any>(filter);
  }

  getDetails(id: number): Observable<EpisodeInfo | TrackHttpError> {
    return this.http.get<EpisodeInfo>(
      `${environment.baseUrlAPI}/episode/${id}`
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
