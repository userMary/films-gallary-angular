import { Component, Input } from '@angular/core';
// import { FilmCardComponent } from '../film-card/film-card.component';
import { SearchService } from '../../services/search.service';
// import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-film-pagination',
    standalone: true,
    templateUrl: './film-pagination.component.html',
    styleUrl: './film-pagination.component.scss'
})
export class FilmPaginationComponent {
    @Input() pages: number[] = [];

    constructor(public searchService: SearchService) {
    }

    get currentPage() {
        return this.searchService.pageNumber;
    }

    public changePage(page: number) {
        this.searchService.changePage(page);
    }

    
    // public prevPage() {
    //   this.searchService.prevPage();
    // }
  
    // public nextPage() {
    //   this.searchService.nextPage();
    // }
  
    // public changePage1(page: number) {
    //   this.searchService.changePage1(page);
    // }

}