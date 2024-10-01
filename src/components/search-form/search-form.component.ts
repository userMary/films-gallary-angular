import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { FilmsSearchResponse } from '../../definitions';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})

export class SearchFormComponent {
  @Output() onLoadEvent = new EventEmitter<FilmsSearchResponse>();

  constructor(private searchService: SearchService) {
  }

  public searchForm = new FormGroup({
    s: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    type: new FormControl<string>('movie', {nonNullable: true})
  });

  get s() {
    return this.searchForm.get("s");
  }

  get type() {
    return this.searchForm.get("type");
  }

  action() {
    const filmsSearchResponse$ = this.searchService.searchTitle(this.s?.value, this.type?.value);
    filmsSearchResponse$.subscribe(data => {
      if (data.Response === "True") {
        this.onLoadEvent.emit(data);
      } else {
        alert("Такой фильм, сериал или эпизод не найден.");
      }
    })

  }
}
