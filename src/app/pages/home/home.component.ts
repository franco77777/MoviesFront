import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewChecked {
  ngOnInit() {}

  ngAfterViewChecked(): void {}
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
