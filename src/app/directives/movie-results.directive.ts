import { Movie } from './../site/films/services/movie.model';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
 // Import your Movie interface

@Directive({
  selector: '[appMovieResults]', // Ensure this matches the template
  standalone: true, // Make the directive standalone
})
export class MovieResultsDirective {
  @Input() set appMovieResults(movies: Movie[] | null) {
    this.viewContainer.clear();

    if (movies && movies.length > 0) {
      movies.forEach((movie) => {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: movie,
        });
      });
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: null,
      });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
