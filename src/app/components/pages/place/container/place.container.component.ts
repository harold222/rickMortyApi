import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaceStoreService } from '../service/place.store.service';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';

@Component({
  selector: 'app-place-container',
  templateUrl: './place.container.component.html'
})
export class PlaceContainerComponent {

  public loading$: Observable<boolean> = new Observable<boolean>();
  public error$: Observable<TrackHttpError> = new Observable<TrackHttpError>();

  constructor(private placeStoreService: PlaceStoreService) {
    this.loading$ = this.placeStoreService.selectLoading();
    this.error$ = this.placeStoreService.selectError();
  }

}
