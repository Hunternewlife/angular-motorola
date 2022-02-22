import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageOneComponent } from './components/page-one/page-one.component';

import { MaterialComponentsModule } from './material-components/material-components.module';
import { TestComponent } from './components/test/test.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageOneComponent,
    TestComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    CarouselModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
