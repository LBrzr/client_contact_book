import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ContactTileComponent } from './components/contact-tile/contact-tile.component';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactTileComponent,
    ContactPageComponent,
    AppHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
