import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '@app/shared/interfaces/characters/character.interface';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';
import { CharacterService } from '@app/shared/services/character.service';
import { first, take } from 'rxjs';

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
    private router: Router,
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
    this.router.navigate(['/']);
  }
}
