import { PeliculasService } from './../../services/peliculas.service';

import {
  Component,
  ViewEncapsulation,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideComponent implements OnInit {
  private series: any[] = [];
  constructor(private service: PeliculasService) {}

  ngOnInit(): void {
    this.getSeries();
  }
  getSeries() {
    this.service
      .getSeries()
      .subscribe(
        (data) => (
          (this.series = data.results), console.log('soy series2', this.series)
        )
      );
  }
}
