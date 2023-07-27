import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable, first, take } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  public character?: Character;
  public error?: TrackHttpError;

  constructor(
    private route: ActivatedRoute, 
    private characterSvc: CharacterService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)
    ).subscribe((params: any) => {
      this.characterSvc.getDetails(params['id'])
        .pipe(
          first()
        )
        .subscribe(resp => {
          if (resp instanceof TrackHttpError)
            this.error = resp;
          else
            this.character = resp;
        });
    });
  }

  onGoBack():void{
    this.location.back();
  }
}
