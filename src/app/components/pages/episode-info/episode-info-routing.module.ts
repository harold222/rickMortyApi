import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeInfoComponent } from './episode-info.component';

const routes: Routes = [{ path: '', component: EpisodeInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeInfoRoutingModule { }
