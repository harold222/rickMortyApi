import { Component, Input } from '@angular/core';
import { Character } from '../../../../../shared/interfaces/characters/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  @Input() characters: Character[] | null = [];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}
