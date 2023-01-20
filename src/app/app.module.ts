////////////////////////MODULOS//////////////////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

/* /////////////////////////COMPONENTES////////////////////////// */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { MoviesCardComponent } from './components/movies-card/movies-card.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavbarDirective } from './directivas/navbar.directive';
import { AsideDirective } from './directivas/aside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    SidebarComponent,
    CarouselComponent,
    SlideComponent,
    PruebasComponent,
    MoviesCardComponent,
    AsideComponent,
    NavbarDirective,
    AsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
