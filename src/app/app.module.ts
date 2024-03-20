import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ MatSelectModule,MatInputModule,MatFormFieldModule,
    BrowserModule,MatIconModule,BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),provideAnimations(), provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
