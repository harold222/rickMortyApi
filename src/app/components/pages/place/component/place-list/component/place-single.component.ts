import { Component, Input } from '@angular/core';
import { PlaceInfoInterface } from '@app/shared/interfaces/places/PlaceInfo.interface';

@Component({
  selector: 'app-place-single',
  templateUrl: './place-single.component.html',
  styleUrls: ['./place-single.component.css']
})
export class PlaceSingleComponent {

  @Input() places: PlaceInfoInterface[] | null = [];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}
