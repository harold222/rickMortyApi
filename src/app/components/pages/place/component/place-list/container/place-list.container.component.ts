import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Character } from "@app/shared/interfaces/characters/character.interface";
import { Observable, Subject, filter, take, takeUntil } from 'rxjs';
import { PlaceStoreService } from "../../../service/place.store.service";

@Component({
    selector: 'app-place-list-container',
    templateUrl: './place-list.container.component.html',
  })
export class PlaceListContainerComponent {

    public pageNum = 1;
    private query: string = "";
    // public characters$: Observable<Character[]> = new Observable<Character[]>();
    public totalPages$: Observable<number> = new Observable<number>();
    private unsubscribe$ = new Subject<void>();

    constructor(
        private placeStoreService: PlaceStoreService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.onUrlChanged();
    }

    ngOnInit(): void {
        this.getDataFromService();
        this.totalPages$ = this.placeStoreService.selectTotalPages();
    }

    private onUrlChanged(): void {
        this.router.events
        .pipe(
            takeUntil(this.unsubscribe$),
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
        // this.placeStoreService.searchCharacters(this.query, this.pageNum);
    }
    
    private getDataFromService(): void {
        // this.characters$ = this.homeStoreService.selectCharacter();
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}