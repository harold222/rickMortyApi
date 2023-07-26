import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent {

  public existSearch = false;

  constructor(private router: Router) {}

  public onSearch(event: any) {
    let generateSearch = false;

    if (event.target.value) {
      this.existSearch = true;
      generateSearch = true;
    } else {
      if (this.existSearch)
        generateSearch = true;
    }

    if (generateSearch) {
      this.router.navigate([`/lista-personajes`], {
        queryParams: {
          q: event.target.value
        }
      });
    }
  }

}
