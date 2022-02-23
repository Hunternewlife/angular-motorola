import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { GovernmentGrantsComponent } from './pages/government-grants/government-grants.component';
import { GrantProductsComponent } from './pages/grant-products/grant-products.component';
import { GrantIndustryComponent } from './pages/grant-industry/grant-industry.component';
import { GrantResourcesComponent } from './pages/grant-resources/grant-resources.component';
import { GrantRecentComponent } from './pages/grant-recent/grant-recent.component';
import { GrantPartnersComponent } from './pages/grant-partners/grant-partners.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    GovernmentGrantsComponent,
    GrantProductsComponent,
    GrantIndustryComponent,
    GrantResourcesComponent,
    GrantRecentComponent,
    GrantPartnersComponent,
    FooterComponent
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
