import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { CharactersModule } from '../characters/characters.module';
import { HomeContainerComponent } from './container/home.component';
import { LoadingComponent } from '@app/shared/components/loading/loading.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeContainerComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule
  ]
})
export class HomeModule { }
