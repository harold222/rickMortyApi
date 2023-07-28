import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { RouterModule } from '@angular/router';
import { FormErrorComponent } from './form-error/form-error.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaginationComponent,
    LoadingComponent,
    HeaderComponent,
    FormSearchComponent,
    FormErrorComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PaginationComponent,
    LoadingComponent,
    HeaderComponent,
    FormSearchComponent,
    FormErrorComponent,
    FilterComponent
  ]
})
export class SharedModule { }