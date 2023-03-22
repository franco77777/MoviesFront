import { JwtServiceService } from 'src/app/jwt/jwt-service.service';
import { CookieService } from 'ngx-cookie-service';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebasComponent {
  navegar() {
    window.location.replace('/home');
  }
}
