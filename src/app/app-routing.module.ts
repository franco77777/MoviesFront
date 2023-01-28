import { PruebasComponent } from './components/pruebas/pruebas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { GenresComponent } from './pages/genres/genres.component';
import { SeriesComponent } from './pages/series/series.component';
import { SearcherComponent } from './pages/searcher/searcher.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'view/:type/:id', component: PeliculaComponent },
  { path: 'prueba', component: PruebasComponent },
  { path: 'pelicula/:genre/:id', component: GenresComponent },
  { path: 'series/:type', component: SeriesComponent },
  { path: 'search/:input', component: SearcherComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
