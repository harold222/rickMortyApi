import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html'
})
export class EpisodeComponent {

  @Input() loading: boolean | null = false;

  constructor(){
  }

}
