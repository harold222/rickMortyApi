import { Component, Input } from '@angular/core';
import { HomeStoreService } from '@app/components/pages/home/service/home.store.service';
import { FilterCharacter } from '@app/shared/interfaces/characters/FilterCharacter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public stateOption: string = "";
  public genderOption: string = "";
  public name: string = "";
  public currentPage: number = 1;
  public specieOption: string = "";

  @Input() set page(value: number | null) {
    if (value) {
      this.currentPage = value;
      this.filterCharacters();
    }
  }

  constructor(
    private homeStoreService: HomeStoreService,
  ) { }

  public ngOnInit(): void {
  }

  public onOptionChange() {
    this.currentPage = 1;
    this.filterCharacters();
  }

  public onNameChange(value: string) {
    this.name = value;
    this.currentPage = 1;
    this.filterCharacters();
  }

  public onClear() {
    this.stateOption = "";
    this.genderOption = "";
    this.name = "";
    this.currentPage = 1;
    this.specieOption = "";
    this.filterCharacters();
  }

  private filterCharacters() {
    const request: FilterCharacter = {
      status: this.stateOption,
      gender: this.genderOption,
      name: this.name || '',
      page: this.currentPage || 1,
      specie: this.specieOption || '',
      types: ''
    }

    this.homeStoreService.filterCharacters(request);
  }

}
