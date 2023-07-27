import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { HomeStoreService } from "@app/components/pages/home/service/home.store.service";
import { Character } from "@app/shared/interfaces/characters/character.interface";
import { Observable, filter, take } from 'rxjs';

@Component({
    selector: 'app-character-list-container',
    templateUrl: './character-list-container.component.html',
  })
export class CharacterListContainerComponent {

    public pageNum = 1;
    private query: string = "";
    public characters$: Observable<Character[]> = new Observable<Character[]>();
    public totalPages$: Observable<number> = new Observable<number>();

    constructor(
        private homeStoreService: HomeStoreService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.onUrlChanged();
    }

    ngOnInit(): void {
        this.getDataFromService();
        this.totalPages$ = this.homeStoreService.selectTotalPages();
    }

    private onUrlChanged(): void {
        this.router.events
        .pipe(
            filter((event) => event instanceof NavigationEnd)
        )
        .subscribe(() => this.getCharactersByQuery());
    }

    private getCharactersByQuery(): void {
        this.route.queryParams.pipe(
          take(1)
        ).subscribe((params: any) => {
            if (params['page'])  {
                try {
                    this.pageNum = parseInt(params['page']);
                } catch (error) {
                    this.pageNum = 1;
                }
            } else
                this.pageNum = 1;

            this.query = params['q'] || "";
            this.searchData();
        });
      }

    private searchData(): void {
        this.homeStoreService.searchCharacters(this.query, this.pageNum);
    }
    
    private getDataFromService(): void {
        this.characters$ = this.homeStoreService.selectCharacter();
    }
}