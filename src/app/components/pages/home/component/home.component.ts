import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  @Input() loading: boolean | null = false;

  constructor(){
  }

}
