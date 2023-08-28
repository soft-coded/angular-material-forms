import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
