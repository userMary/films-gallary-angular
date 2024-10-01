import { Routes } from '@angular/router';
import { FilmDetailsPageComponent } from '../components/film-details-page/film-details-page.component';
import { FilmGalleryComponent } from '../components/film-gallery/film-gallery.component';

export const routes: Routes = [

    {
        path: "film/:id",
        component: FilmDetailsPageComponent
    },


    {
        path: "**",
        component: FilmGalleryComponent
    }

    
];
