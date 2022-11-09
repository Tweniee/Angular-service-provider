import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user/user.component';
import { UserService } from './user/service/user.service';
import { MainLayoutComponent } from './MainLayout/main-layout/main-layout.component';
import { EmailVerificationComponent } from './user/email-verification/email-verification.component';
import { HeadersInterceptor } from './interceptor/headers.interceptor';
import { MainService } from './MainLayout/Services/main-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    MainLayoutComponent,
    EmailVerificationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[],
  providers: [
    UserService,
    MainService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
