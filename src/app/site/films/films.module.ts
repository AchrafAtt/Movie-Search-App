import { SearchmovieService } from './services/searchmovie.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ],
  providers: [SearchmovieService],
})
export class FilmsModule {}
