import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeStoreService } from '../service/home.store.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home.container.component.html'
})
export class HomeContainerComponent {

    public loading$: Observable<boolean> = new Observable<boolean>();

    constructor(private homeStoreService: HomeStoreService) {
        this.loading$ = this.homeStoreService.selectLoading();
    }

}
