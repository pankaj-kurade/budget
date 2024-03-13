import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MatIconModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),provideAnimations(), provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
