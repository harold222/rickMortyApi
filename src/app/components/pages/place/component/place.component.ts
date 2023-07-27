import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html'
})
export class PlaceComponent {

  @Input() loading: boolean | null = false;

  constructor(){
  }

}
