import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './mainStore/app.reducer';
import { HomeEffects } from './components/pages/home/store/home.effect';
import { PlaceEffects } from './components/pages/place/store/place.effect';
import { EpisodeEffects } from './components/pages/episode/store/episode.effect';
import { SharedModule } from './shared/components/Shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      HomeEffects,
      PlaceEffects,
      EpisodeEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
