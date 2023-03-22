import { CookieService } from 'ngx-cookie-service';
import {
  Component,
  Input,
  OnDestroy,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';
import { Subscription, map, Observable, of } from 'rxjs';
import { JwtServiceService } from 'src/app/jwt/jwt-service.service';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() loginActive: boolean;
  @Input() loginModal: ElementRef;

  email: string;
  password: string;
  public subscription: Subscription;
  constructor(
    private jwtService: JwtServiceService,
    private cookiesService: CookieService,
    private renderer2: Renderer2,
    private serviceApi: DatabaseService
  ) {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.loginActive = false;
    this.renderer2.removeClass(
      this.loginModal.nativeElement,
      'registermodalview'
    );
  }
  closeModal() {
    this.loginActive = false;
    this.renderer2.removeClass(
      this.loginModal.nativeElement,
      'registermodalview'
    );
  }
  login() {
    if (!this.password || !this.email) {
      return alert('completa todos los campos');
    }

    try {
      this.jwtService
        .Login({ email: this.email, password: this.password })
        .subscribe(
          (response) => (
            console.log('soy login', response.token),
            this.cookiesService.set('token', response.token),
            (this.loginActive = false),
            this.renderer2.removeClass(
              this.loginModal.nativeElement,
              'registermodalview'
            ),
            this.serviceApi.setUserApi(this.email),
            Swal.fire({
              icon: 'success',
              title: `Bienvenido ${this.email}`,
              showConfirmButton: false,
              timer: 1000,
              background: '#1E2747',
              color: '#fff',
            })
            //window.location.replace('/home')
          ),
          (err) =>
            Swal.fire({
              icon: 'error',
              title: `datos incorrectos`,
              showConfirmButton: false,
              timer: 1500,
              background: '#1E2747',
              color: '#fff',
            })
        );
    } catch (error) {
      alert('datos incorrectos');
    }
  }
}
