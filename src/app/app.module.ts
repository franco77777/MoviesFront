////////////////////////MODULOS//////////////////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
