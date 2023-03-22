import { Observable } from 'rxjs';
import { PeliculasService } from './../../services/peliculas.service';

import {
  Component,
  ViewEncapsulation,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Series } from '../../interfaces';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent implements OnInit {
  public URL: string = 'https://image.tmdb.org/t/p/w500';

  public series$: Observable<Series>;
  constructor(private service: PeliculasService) {}

  ngOnInit(): void {
    this.series$ = this.service.getSeriesPopular('1');
  }

  getURL(post: string) {
    if (!post) return '../../../assets/images/travolta.png';
    return `${this.URL}${post}`;
  }
}
