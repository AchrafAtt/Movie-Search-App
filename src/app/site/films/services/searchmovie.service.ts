
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../env/environment';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class SearchmovieService {
  private api = environment.omdbApiUrl;
  private key = environment.omdbApiKey;

  constructor(private httpClient: HttpClient) {} // No circular dependency here

  search(name: string, year?: number): Observable<Movie> {
    const url = `${this.api}?apikey=${this.key}&t=${name}${year ? '&y=' + year : ''}`;
    return this.httpClient.get<Movie>(url);
  }
}




