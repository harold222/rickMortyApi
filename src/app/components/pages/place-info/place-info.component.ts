import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';
import { first, take } from 'rxjs';
import { Location } from '@angular/common';
import { PlaceInfoInterface } from '../../../shared/interfaces/places/PlaceInfo.interface';
import { PlaceService } from '@app/shared/services/place.service';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.css']
})
export class PlaceInfoComponent {

  public place?: PlaceInfoInterface;
  public error?: TrackHttpError;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)
    ).subscribe((params: any) => {
      this.placeService.getDetails(params['id'])
        .pipe(
          first()
        )
        .subscribe(resp => {
          if (resp instanceof TrackHttpError)
            this.error = resp;
          else
            this.place = resp;
        });
    });
  }

  onGoBack():void{
    this.location.back();
  }
}
