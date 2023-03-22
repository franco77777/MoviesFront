////////////////////////MODULOS//////////////////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { MoviesCardComponent } from './components/movies-card/movies-card.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavbarDirective } from './directivas/navbar.directive';
import { AsideDirective } from './directivas/aside.directive';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { RecargaDirective } from './directivas/recarga.directive';
import { GenresComponent } from './pages/genres/genres.component';
import { MovieGenresComponent } from './components/movie-genres/movie-genres.component';
import { SeriesComponent } from './pages/series/series.component';
import { SeriesRouteComponent } from './components/series-route/series-route.component';

import { SearcherComponent } from './pages/searcher/searcher.component';
import { SearchComponent } from './components/search/search.component';

import { LoaderComponent } from './components/loader/loader.component';

import { FormsModule } from '@angular/forms';
import { Interceptor } from './jwt/interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PeliculaComponent } from './pages/details/pelicula.component';
import { MovieTopComponent } from './components/movie-top/movie-top.component';
import { MovieTypeComponent } from './components/movie-type/movie-type.component';
import { TypeComponent } from './pages/type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    NavbarDirective,
    CarouselComponent,
    SlideComponent,
    PruebasComponent,
    MoviesCardComponent,
    AsideComponent,
    MovieTopComponent,
    PeliculaComponent,
    AsideDirective,

    RecargaDirective,
    GenresComponent,
    MovieGenresComponent,
    SeriesComponent,
    SeriesRouteComponent,

    SearcherComponent,
    SearchComponent,

    LoaderComponent,

    ProfileComponent,
    FavoritesComponent,
    MyprofileComponent,
    SidebarComponent,
    MovieTypeComponent,
    TypeComponent,
  ],
  imports: [
    FormsModule,
    YouTubePlayerModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false,
      lazy: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
