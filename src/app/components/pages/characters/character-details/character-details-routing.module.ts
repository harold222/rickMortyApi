import { NgModule } from '@angular/core';
import { CharacterDetailsComponent } from './character-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CharacterDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetailsRoutingModule { }
