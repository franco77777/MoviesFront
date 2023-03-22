import { Router } from '@angular/router';
import { Subscription, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './../../interfaces/index';
import {
  Component,
  OnDestroy,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
} from '@angular/core';
import { JwtServiceService } from 'src/app/jwt/jwt-service.service';
import { CookieService } from 'ngx-cookie-service';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() registerModal: ElementRef;
  @Input() register: boolean;
  @Input() user$: Observable<string>;
  email: string = null;
  password: string = null;
  password2: string = null;

  public subscription: Subscription;
  public User: User;

  constructor(
    private jwtService: JwtServiceService,
    private cookieService: CookieService,
    private renderer2: Renderer2,
    private router: Router,
    private serviceApi: DatabaseService
  ) {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.register = false;
    this.renderer2.removeClass(
      this.registerModal.nativeElement,
      'registermodalview'
    );
  }
  ngOnInit(): void {
    console.log('soy la ruta actual', this.router.url);
  }

  closeModal() {
    this.register = false;
    this.renderer2.removeClass(
      this.registerModal.nativeElement,
      'registermodalview'
    );
  }

  sendRegister() {
    if (this.password !== this.password2) {
      return Swal.fire({
        icon: 'warning',
        title: `las contraseñas no coinciden`,
        showConfirmButton: false,
        timer: 1500,
        background: '#1E2747',
        color: '#fff',
      });
    }
    if (!this.password || !this.password2 || !this.email) {
      Swal.fire({
        icon: 'warning',
        title: `completa todos los campos`,
        showConfirmButton: false,
        timer: 1500,
        background: '#1E2747',
        color: '#fff',
      });
      return console.log('error');
    }

    try {
      this.jwtService
        .Register({ email: this.email, password: this.password })
        .pipe(
          map((res) => {
            this.cookieService.set('token', res.token),
              (this.register = false),
              this.renderer2.removeClass(
                this.registerModal.nativeElement,
                'registermodalview'
              ),
              this.serviceApi.setUserApi(this.email);
            Swal.fire({
              icon: 'success',
              title: `Bienvenido ${this.email}`,
              showConfirmButton: false,
              timer: 1000,
              background: '#1E2747',
              color: '#fff',
            });
          }),
          catchError((err) => {
            Swal.fire({
              icon: 'error',
              title: `el email ${this.email} ya esta registrado`,
              showConfirmButton: false,
              timer: 1500,
              background: '#1E2747',
              color: '#fff',
            });
            return of(null);
          })
        )
        .subscribe();
    } catch (error) {
      alert('datos incorrectos');
    }
    console.log('soy token', this.cookieService.get('token'));

    console.log(this.email);
    console.log(this.password);
    console.log(this.password2);
  }
  ngOnDestroy(): void {}
}
/* try {
  this.jwtService
    .Register({ email: this.email, password: this.password })
    .subscribe(
      (response) => (
        console.log('soy resgister', response.token),
        this.cookieService.set('token', response.token)
      )
    );
} catch (error) {
  alert('el email ya existe');
}
 */
