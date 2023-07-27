import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent {

  public existSearch = false;
  private searchSubject = new Subject<string>();
  @ViewChild('inputSearch') inputSearch: ElementRef = new ElementRef(null);


  constructor(
    private router: Router,
    private loation: Location
  ) {
    this.searchSubject.pipe(
      debounceTime(700)
    ).subscribe((value: string) => {
      const path = this.loation.path().split('?');
      this.router.navigate([path[0]], {
        queryParams: {
          q: value
        }
      });
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
