import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListContainerComponent } from './container/character-list-container.component';

const routes: Routes = [
  { 
    path: '',
    component: CharacterListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListRoutingModule { }
