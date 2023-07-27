import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { CharactersModule } from '../characters/characters.module';
import { HomeContainerComponent } from './container/home.component';
import { SharedModule } from '@app/shared/components/Shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeContainerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
    SharedModule
  ]
})
export class HomeModule { }
