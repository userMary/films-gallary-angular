import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FilmPaginationComponent } from '../components/film-pagination/film-pagination.component';
import { environment123 } from '../environments/environment.development';
import { FilmsSearchResponse } from '../definitions';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery: string = '';
  private type: string = 'movie';
  public pageNumber: number = 1;
  private filmsSubject = new BehaviorSubject<FilmsSearchResponse | null>(null);
  public filmsSubject$ = this.filmsSubject.asObservable();

  constructor(private http: HttpClient) { 
  }

  getPagination(totalResults?: string): number[] {
    let total = Math.ceil(Number(totalResults) / 10);
    let pages = [];
    for (let i = 1; i <= total; i++) {
        if (i > 2 && i < this.pageNumber - 3) {
            pages.push(0);
            i = this.pageNumber - 4;
            continue;
        }
        if (i > this.pageNumber + 3 && i < total - 1) {
            pages.push(0);
            i = total - 2;
            continue;
        }
        pages.push(i);
    }
    return pages;
}

  searchTitle(s: string | undefined, type: string | undefined): Observable<FilmsSearchResponse> {
    this.searchQuery = s || '';
    this.type = type || 'movie';
    this.pageNumber = 1;
    return this.fetchFilms();
  }

  changePage(nextPage: number): void {
    this.pageNumber = nextPage;
    this.fetchFilms().subscribe(data => this.filmsSubject.next(data));
  }

  private fetchFilms(): Observable<FilmsSearchResponse> {
    return this.http.get<FilmsSearchResponse>(
      'http://www.omdbapi.com', {
        responseType: "json",
        params: {
          apikey: environment123.omdb_api,
          s: this.searchQuery,
          type: this.type,
          page: this.pageNumber
        }
      }
    );
  }


  

  // async prevPage(): Promise<void> {
  //   this.pageNumber = --this.pageNumber || 1;
  //   this.filmsSubject.next(await this.fetchFilms1());
  // }

  // async nextPage(): Promise<void> {
  //   ++this.pageNumber; // TODO проверять максимальное количество страниц
  //   this.filmsSubject.next(await this.fetchFilms1());
  // }

  // async changePage1(nextPage: number): Promise<void> {
  //   this.pageNumber = nextPage;
  //   this.filmsSubject.next(await this.fetchFilms1());
  // }

  // private async fetchFilms1(): Promise<FilmsSearchResponse> {
  //   const response = await fetch(
  //     'http://www.omdbapi.com/?apikey=' 
  //     + environment123.omdb_api 
  //     + '&s=' + this.searchQuery
  //     + '&type=' + this.type
  //     + '&page=' + this.pageNumber);
  //     return await response.json();
  // }



}
