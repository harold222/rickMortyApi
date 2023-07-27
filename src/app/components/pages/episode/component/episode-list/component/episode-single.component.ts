import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episode-single',
  templateUrl: './episode-single.component.html',
  styleUrls: ['./episode-single.component.css']
})
export class EpisodeSingleComponent {

  @Input() episodes: any[] | null = [];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}
