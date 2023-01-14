import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages/pages.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, PagesModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
