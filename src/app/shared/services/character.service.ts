import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character.interface';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { TrackHttpError } from '../models/TrackHttpError';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 200): Observable<Character[] | TrackHttpError> {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
      .pipe(
        catchError(
          (err) => this.handleHttpError(err)
        )
      );
  }

  getDetails(id: number): Observable<Character | TrackHttpError> {
    return this.http.get<Character>(
      `${environment.baseUrlAPI}/${id}`
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
