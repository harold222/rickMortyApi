import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceContainerComponent } from './container/place.container.component';

const routes: Routes = [{ path: '', component: PlaceContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
