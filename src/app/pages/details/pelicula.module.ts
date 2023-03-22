/* import { FormsModule } from '@angular/forms';
import { MovieTopComponent } from './../../components/movie-top/movie-top.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './pelicula.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SwiperModule } from 'swiper/angular';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ServicesModule } from 'src/app/services/services.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [{ path: '', component: PeliculaComponent }];

@NgModule({
  declarations: [MovieTopComponent, PeliculaComponent],
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
    RouterModule.forChild(routes),
  ],
})
export class PeliculaModule {}
 */
