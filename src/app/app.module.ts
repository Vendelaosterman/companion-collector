import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';
import { PokemonCataloguePageComponent } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TrainerPageComponent,
    PokemonCataloguePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

