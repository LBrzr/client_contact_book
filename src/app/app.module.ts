import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientTileComponent } from './client-tile/client-tile.component';
import { ClientPageComponent } from './client-page/client-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTileComponent,
    ClientPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
