import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaceStoreService } from '../service/place.store.service';

@Component({
  selector: 'app-place-container',
  templateUrl: './place.container.component.html'
})
export class PlaceContainerComponent {

  public loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private placeStoreService: PlaceStoreService) {
      this.loading$ = this.placeStoreService.selectLoading();
  }

}
