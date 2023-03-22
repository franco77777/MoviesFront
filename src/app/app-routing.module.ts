import { MovieTypeComponent } from './components/movie-type/movie-type.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { GenresComponent } from './pages/genres/genres.component';
import { SeriesComponent } from './pages/series/series.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PeliculaComponent } from './pages/details/pelicula.component';
import { TypeComponent } from './pages/type/type.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'view/:type/:id',
    component: PeliculaComponent,
  },
  { path: 'prueba', component: PruebasComponent },
  { path: 'pelicula/:genre/:id', component: GenresComponent },
  { path: 'series/:type', component: SeriesComponent },
  { path: 'search/:input', component: SearcherComponent },
  { path: 'pelicula/:type', component: TypeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
