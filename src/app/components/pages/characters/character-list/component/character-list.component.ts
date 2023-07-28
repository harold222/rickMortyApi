import { Component, Input } from '@angular/core';
import { Character } from '../../../../../shared/interfaces/characters/character.interface';
import { FilterCharacter } from '@app/shared/interfaces/characters/FilterCharacter.interface';
import { Subject } from 'rxjs';
import { HomeStoreService } from '@app/components/pages/home/service/home.store.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  @Input() characters: Character[] | null = [];

  @Input() filter: FilterCharacter | null = null;

  @Input() totalPages: number | null = null;

  public destroy$: Subject<boolean> = new Subject<boolean>();
  public pageNum = 1;

  constructor(
    private homeStoreService: HomeStoreService,
  ) {
    this.searchData();
  }
  
  ngOnInit(): void {
  }

  private searchData(): void {
    const request: FilterCharacter = {
        name: '',
        page: this.pageNum,
        gender: '',
        specie: '',
        status: '',
        types: ''
    };

    this.homeStoreService.setFilter(request);
    this.homeStoreService.filterCharacters(request);
  }

  public pageChange(page: number): void {
    this.pageNum = page;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
