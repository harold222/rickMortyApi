import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Character } from "@app/shared/interfaces/characters/character.interface";
import { Observable, Subject, filter, take, takeUntil } from 'rxjs';
import { EpisodeStoreService } from "../../../service/episode.store.service";

@Component({
    selector: 'app-episode-list-container',
    templateUrl: './episode-list.container.component.html',
  })
export class EpisodeListContainerComponent {

    public pageNum = 1;
    private query: string = "";
    public episodes$: Observable<any[]> = new Observable<any[]>();
    public totalPages$: Observable<number> = new Observable<number>();
    private unsubscribe$ = new Subject<void>();

    constructor(
        private episodeStoreService: EpisodeStoreService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.onUrlChanged();
    }

    ngOnInit(): void {
        this.getDataFromService();
        this.totalPages$ = this.episodeStoreService.selectTotalPages();
    }

    private onUrlChanged(): void {
        this.router.events
        .pipe(
            takeUntil(this.unsubscribe$),
            filter((event) => event instanceof NavigationEnd)
        )
        .subscribe(() => this.getEpisodesByQuery());
    }

    private getEpisodesByQuery(): void {
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
        this.episodeStoreService.searchEpisodes(this.query, this.pageNum);
    }
    
    private getDataFromService(): void {
        this.episodes$ = this.episodeStoreService.selectEpisodes();
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}