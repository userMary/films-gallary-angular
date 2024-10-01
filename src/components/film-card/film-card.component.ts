import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../definitions'; 

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss'
})

export class FilmCardComponent {
  @Input() film33!: Film;
}
