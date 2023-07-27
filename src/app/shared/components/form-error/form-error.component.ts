import { Component, Input } from '@angular/core';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent {

  @Input() set error(value: TrackHttpError | null){
    this.messageError = value?.friendlyMessage || "";
    this.classShowModal =  "form-error d-block";
  }

  public messageError: string = "";
  public classShowModal: string = "";

  constructor() {
    
  }

  closeModal() {
    this.messageError = "";
    this.classShowModal = "";
  }
  
}
