import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { RouterModule } from '@angular/router';
import { FormErrorComponent } from './form-error/form-error.component';

@NgModule({
  declarations: [
    PaginationComponent,
    LoadingComponent,
    HeaderComponent,
    FormSearchComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent,
    LoadingComponent,
    HeaderComponent,
    FormSearchComponent,
    FormErrorComponent
  ]
})
export class SharedModule { }