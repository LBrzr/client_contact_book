import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ContactTileComponent } from './components/contact-tile/contact-tile.component';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailComponent } from './pages/contact-detail-page/contact-detail.component';
import { ContactInfoCardComponent } from './components/contact-info-card/contact-info-card.component';
import { ContactEditCardComponent } from './components/contact-edit-card/contact-edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactTileComponent,
    ContactPageComponent,
    AppHeaderComponent,
    ContactDetailComponent,
    ContactInfoCardComponent,
    ContactEditCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
