import { Component, Input } from '@angular/core';
import { EpisodeInfo } from '@app/shared/interfaces/episodes/EpisodeInfo.interface';

@Component({
    selector:'app-episode-detail',
    templateUrl: './episode-detail.component.html',
})
export class EpisodeDetailComponent {

    @Input() episode?: EpisodeInfo;

}