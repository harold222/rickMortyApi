import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/characters/character.interface';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { TrackHttpError } from '../models/TrackHttpError';
import { SearchCharacter } from '../interfaces/characters/SearchCharacter.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 200): Observable<SearchCharacter> {
    const filter = `${environment.baseUrlAPI}/character?name=${query}&page=${page}`;
    return this.http.get<SearchCharacter>(filter);
  }

  getDetails(id: number): Observable<Character | TrackHttpError> {
    return this.http.get<Character>(
      `${environment.baseUrlAPI}/character/${id}`
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
