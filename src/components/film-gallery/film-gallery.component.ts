import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchFormComponent } from '../search-form/search-form.component';
import { FilmPaginationComponent } from '../film-pagination/film-pagination.component';
import { FilmCardComponent } from '../film-card/film-card.component';
import { Film, FilmsSearchResponse } from '../../definitions';

@Component({
  selector: 'app-film-gallery',
  standalone: true,
  imports: [SearchFormComponent, FilmCardComponent, FilmPaginationComponent],
  templateUrl: './film-gallery.component.html',
  styleUrl: './film-gallery.component.scss'
})
export class FilmGalleryComponent {
  public films6: Film[] = [];
  public pages5: number[] = [];

  constructor(public searchService: SearchService){
  }

  ngOnInit() {
    this.searchService.filmsSubject$.subscribe(
      response => this.loadFilms(response)
    )
  }

  loadFilms(response: FilmsSearchResponse | null) {
    if (!response) return;
    this.films6 = response.Search || [];
    this.pages5 = this.searchService.getPagination(response.totalResults);

  }
}