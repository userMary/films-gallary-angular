import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmInfo } from '../definitions';
import { environment123 } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsService {

  constructor(private http: HttpClient) {
  }

  getInfo(imdbID: string): Observable<FilmInfo> {
    return this.http.get<FilmInfo>('http://www.omdbapi.com', {
      responseType: "json",
      params: {
        apikey: environment123.omdb_api,
        i: imdbID
      }
    });
  }
}
