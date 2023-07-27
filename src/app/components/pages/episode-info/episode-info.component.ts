import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/shared/interfaces/characters/character.interface';
import { EpisodeInfo } from '@app/shared/interfaces/episodes/EpisodeInfo.interface';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';
import { CharacterService } from '@app/shared/services/character.service';
import { first, take } from 'rxjs';
import { EpisodeService } from '../../../shared/services/episode.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent {

  public episode?: EpisodeInfo;
  public error?: TrackHttpError;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)
    ).subscribe((params: any) => {
        console.log(params)
      this.episodeService.getDetails(params['id'])
        .pipe(
          first()
        )
        .subscribe(resp => {
          if (resp instanceof TrackHttpError)
            this.error = resp;
          else
            this.episode = resp;
        });
    });
  }

  onGoBack():void{
    this.location.back();
  }
}
