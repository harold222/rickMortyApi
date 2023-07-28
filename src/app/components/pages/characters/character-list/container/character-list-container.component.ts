import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { HomeStoreService } from "@app/components/pages/home/service/home.store.service";
import { FilterCharacter } from "@app/shared/interfaces/characters/FilterCharacter.interface";
import { Character } from "@app/shared/interfaces/characters/character.interface";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-character-list-container',
    templateUrl: './character-list-container.component.html',
  })
export class CharacterListContainerComponent {

    public characters$: Observable<Character[]> = new Observable<Character[]>();
    public totalPages$: Observable<number> = new Observable<number>();
    public selectFilter$: Observable<FilterCharacter> = new Observable<FilterCharacter>();
    public router$: Observable<any> = new Observable<any>();

    constructor(
        private homeStoreService: HomeStoreService
    ) {
    }

    ngOnInit(): void {
        this.characters$ = this.homeStoreService.selectCharacter();
        this.totalPages$ = this.homeStoreService.selectTotalPages();
        this.selectFilter$ = this.homeStoreService.selectFilter();
    }
}