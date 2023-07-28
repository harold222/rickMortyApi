import { Location } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { ViewChild, ElementRef } from '@angular/core';
import { FilterCharacter } from '@app/shared/interfaces/characters/FilterCharacter.interface';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent {

  public existSearch = false;
  private searchSubject = new Subject<string>();
  @ViewChild('inputSearch') inputSearch: ElementRef = new ElementRef(null);
  @Output() name: Subject<string> = new Subject<string>();

  constructor(
    private router: Router,
    private loation: Location
  ) {
    this.searchSubject.pipe(
      debounceTime(700)
    ).subscribe((value: string) => {
      this.name.next(value);
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.includes('?q=')) {
          this.inputSearch.nativeElement.value = '';
        }
      }
    });
  }

  public onSearch(event: any) {
    let generateSearch = false;

    if (event.target.value) {
      this.existSearch = true;
      generateSearch = true;
    } else {
      if (this.existSearch)
        generateSearch = true;
    }

    if (generateSearch)
      this.searchSubject.next(event.target.value);
  }

}
