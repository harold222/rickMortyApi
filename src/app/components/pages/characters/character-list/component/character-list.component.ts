import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input } from '@angular/core';
import { filter, take } from 'rxjs';
import { Character } from '../../../../../shared/interfaces/characters/character.interface';
import { TrackHttpError } from '../../../../../shared/models/TrackHttpError';
import { CharacterService } from '../../../../../shared/services/character.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HomeStoreService } from '../../../home/service/home.store.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  @Input() characters: Character[] | null = [];

  // public info: any = {
  //   next: null,
  // };

  // public showGoUpButton = false;

  // private pageNum = 1;

  // private query: string = "";

  // private hideScrollHeight = 200;

  // private showScrollHeight = 500;

  constructor(
    // @Inject(DOCUMENT) private document:Document,
    // private route: ActivatedRoute,
    // private router: Router,
    // private homeStoreService: HomeStoreService
  ) {
    // this.onUrlChanged();
  }

  ngOnInit(): void {
    // this.getDataFromService();
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll():void {
  //   const yOffSet = window.pageYOffset;
  //   if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
  //     this.showGoUpButton = true;
  //   } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
  //     this.showGoUpButton = false;
  //   }
  // }

  // onScrollDown():void{
  //   if (this.info.next) {
  //     this.pageNum++;
  //     this.getDataFromService();
  //   }
  // }

  // onScrollTop():void{
  //   this.document.body.scrollTop = 0;
  //   this.document.documentElement.scrollTop = 0;
  // }

  // private onUrlChanged(): void {
  //   this.router.events
  //     .pipe(
  //       filter((event) => event instanceof NavigationEnd)
  //     )
  //     .subscribe(() => {
  //       this.characters = [];
  //       this.pageNum = 1;
  //       this.getCharactersByQuery();
  //     });
  // }

  // private getCharactersByQuery(): void {
  //   this.route.queryParams.pipe(
  //     take(1)
  //   ).subscribe((params: any) => {
  //     this.query = params['q'];
  //     this.searchData();
  //   });
  // }

  // private searchData(): void {
  //   this.homeStoreService.searchCharacters(this.query, this.pageNum);
  // }

  // private getDataFromService(): void {
  //     this.homeStoreService.selectCharacter()
  //     .pipe(
  //     )
  //     .subscribe((res: Character[]) => {
        
  //     });
  // }

}
