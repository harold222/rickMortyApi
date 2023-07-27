import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeStoreService } from '../service/home.store.service';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.container.component.html'
})
export class HomeContainerComponent {

    public loading$: Observable<boolean> = new Observable<boolean>();
    public error$: Observable<TrackHttpError> = new Observable<TrackHttpError>();

    constructor(private homeStoreService: HomeStoreService) {
      this.loading$ = this.homeStoreService.selectLoading();
      this.error$ = this.homeStoreService.selectError();
    }

}
