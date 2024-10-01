import { Component, Input } from '@angular/core';
import { FilmDetailsService } from '../../services/film-details.service';
import { FilmInfo } from '../../definitions';

@Component({
  selector: 'app-film-details-page',
  standalone: true,
  imports: [],
  templateUrl: './film-details-page.component.html',
  styleUrl: './film-details-page.component.scss'
})
export class FilmDetailsPageComponent {
  @Input() set id(imdbID: string) {
    this.filmDetailsService.getInfo(imdbID).subscribe(film => this.film1 = film)
  }

  public film1!: FilmInfo;

  constructor(private filmDetailsService: FilmDetailsService) {
  }
}
