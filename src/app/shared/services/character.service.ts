import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/characters/character.interface';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { TrackHttpError } from '../models/TrackHttpError';
import { SearchCharacter } from '../interfaces/characters/SearchCharacter.interface';
import { FilterCharacter } from '../interfaces/characters/FilterCharacter.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

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

  filterCharacters(request: FilterCharacter): Observable<SearchCharacter> {
    const filter =
      `${environment.baseUrlAPI}/character?status=${request.status}
      &species=${request.specie}
      &type=${request.types}
      &gender=${request.gender}
      &name=${request.name}
      &page=${request.page}
    `;
    return this.http.get<SearchCharacter>(filter);
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
