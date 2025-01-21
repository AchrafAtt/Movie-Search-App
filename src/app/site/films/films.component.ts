import { Component } from '@angular/core';
import { SearchformComponent } from './searchform/searchform.component';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [SearchformComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {

}
