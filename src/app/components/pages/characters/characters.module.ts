import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/component/character-list.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './character.component';
import { CharacterListContainerComponent } from './character-list/container/character-list-container.component';
import { PaginationComponent } from '@app/shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterListContainerComponent,
    CharacterComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterListContainerComponent
  ]
})
export class CharactersModule { }
