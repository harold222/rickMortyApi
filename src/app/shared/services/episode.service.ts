import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SearchEpisodes } from '../interfaces/episodes/SearchEpisodes.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  searchEpisodes(query = '', page = 200): Observable<SearchEpisodes> {
    const filter = `${environment.baseUrlAPI}/episode/?name=${query}&page=${page}`;
    return this.http.get<any>(filter);
  }
}
