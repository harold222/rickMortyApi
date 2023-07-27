import { Component, Input } from '@angular/core';
import { EpisodeInfo } from '@app/shared/interfaces/episodes/EpisodeInfo.interface';
import { PlaceInfoInterface } from '@app/shared/interfaces/places/PlaceInfo.interface';
import { SearchPlaces } from '@app/shared/interfaces/places/SearchPlaces.interface';

@Component({
    selector:'app-place-detail',
    templateUrl: './place-detail.component.html',
})
export class PlacesDetailComponent {

    @Input() place?: PlaceInfoInterface;

}