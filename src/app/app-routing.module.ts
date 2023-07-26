import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'lista-personajes',
    loadChildren: () => import('./components/pages/characters/character-list/character-list.module')
      .then(m => m.CharacterListModule)
  },
  {
    path: 'detalle-personaje/:id',
    loadChildren: () => import('./components/pages/characters/character-details/character-details.module')
      .then(m => m.CharacterDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
