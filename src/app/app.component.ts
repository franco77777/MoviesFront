import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  EffectCreative,
  EffectCube,
  Navigation,
  Pagination,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectCube, EffectCreative]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'moviesApp';
}
