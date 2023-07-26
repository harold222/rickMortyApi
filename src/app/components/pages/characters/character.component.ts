import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';

@Component({
    selector:'app-character',
    template:`
    <div class="card">
      <div class="image">
        <div *ngIf="character instanceof Character">

        </div>
          <a [routerLink]="['/detalle-personaje', character?.id]">
            <img
              [src]="character?.image"
              [alt]="character?.name"
              class="card-img-top"
            />
          </a>
      </div>
      <div class="card-inner p-2">
        <div class="header">
          <a [routerLink]="['/detalle-personaje', character?.id]">
            <h2> {{ character?.name | slice: 0:15}}</h2>
          </a>
          <h4 class="text-muted">{{ character?.gender }}</h4>
          <small class="text-muted">{{ character?.created | date }}</small>
        </div>
      </div>
    </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{

    @Input() character?: Character;

}