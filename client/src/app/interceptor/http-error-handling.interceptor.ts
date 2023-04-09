import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { tokenGetter } from '../app.module';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class HttpErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtHelperService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
  }
}
