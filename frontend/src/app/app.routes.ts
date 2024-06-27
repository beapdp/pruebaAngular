import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { Pelicula1Component } from './pages/pelicula1/pelicula1.component';
import { Pelicula2Component } from './pages/pelicula2/pelicula2.component';
import { Pelicula3Component } from './pages/pelicula3/pelicula3.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pelicula1', component: Pelicula1Component},
    { path: 'pelicula2', component: Pelicula2Component},
    { path: 'pelicula3', component: Pelicula3Component},
];

export const appRoutingProviders = [
    provideRouter(routes)
]
