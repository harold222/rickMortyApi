import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent {

  constructor(private router: Router) {}

  public onSearch(event: any) {
    console.log('es: ', event.target.value)
    if (event.target.value) {
      this.router.navigate([`/character-list`], {
        queryParams: {
          q: event.target.value
        }
      });
    }
  }

}
