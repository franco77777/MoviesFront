import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages/pages.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
