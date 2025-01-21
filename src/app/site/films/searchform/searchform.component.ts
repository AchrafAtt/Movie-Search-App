import { MovieResultsDirective } from './../../../directives/movie-results.directive';
import { CommonModule } from '@angular/common';
import { SearchmovieService } from './../services/searchmovie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../services/movie.model';

@Component({
  selector: 'app-searchform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,MovieResultsDirective], // Add ReactiveFormsModule here
  templateUrl: './searchform.component.html',
  styleUrl: './searchform.component.css',
})
export class SearchformComponent implements OnInit {
  myForm: FormGroup;
  movies: Movie[] | null = null; // Store movie data as an array
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private searchmovieService: SearchmovieService
  ) {
    // Initialize the form with validators
    this.myForm = this.fb.group({
      name: ['', Validators.required], // Name is required
      year: [
        null,
        [Validators.required, Validators.min(1900), Validators.max(2017)], // Year must be between 1900 and 2017
      ],
    });
  }

  ngOnInit(): void {}

  // Handle form submission
  startSearch() {
    if (this.myForm.valid) {
      const name = this.myForm.value.name;
      const year = this.myForm.value.year;

      this.searchmovieService.search(name, year).subscribe({
        next: (result) => {
          if (result.Response === 'True') {
            this.movies = [result]; // Assign the movie data as an array
            this.errorMessage = ''; // Clear error message
          } else {
            this.errorMessage = 'Movie not found!'; // Set error message
            this.movies = null; // Clear movie data
          }
        },
        error: (err) => {
          this.errorMessage = 'An error occurred while fetching data.'; // Set error message
          this.movies = null; // Clear movie data
        },
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.'; // Set error message
      this.movies = null; // Clear movie data
    }
  }
  getStarRating(value: string): number {
    if (value.includes('/')) {
      // For ratings like "6.7/10"
      const [numerator, denominator] = value.split('/');
      return (parseFloat(numerator) / parseFloat(denominator)) * 5;
    } else if (value.includes('%')) {
      // For ratings like "64%"
      return (parseFloat(value) / 100) * 5;
    }
    return 0; // Default to 0 stars if the format is unknown
  }

}
