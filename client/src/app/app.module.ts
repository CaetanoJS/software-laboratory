import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandlingInterceptor } from './interceptor/http-error-handling.interceptor';


// specify the key where the token is stored in the local storage
export const LOCALSTORAGE_TOKEN_KEY = 'project-id';

// specify tokenGetter for the angular jwt package
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Import our Routes for this module
    AppRoutingModule,
    // Angular Material Imports
    MatSnackBarModule,
    // Jwt Helper Module Import
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000', 'localhost:8080']
      }
    })
  ],
  providers: [   {

    provide: HTTP_INTERCEPTORS,

    useClass: HttpErrorHandlingInterceptor,

    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }