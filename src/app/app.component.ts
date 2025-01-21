import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './site/home/home.module';
import { AboutModule } from './site/about/about.module';
import { FilmsModule } from './site/films/films.module';
import { NavmenuComponent } from "./site/shared/navmenu/navmenu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeModule, AboutModule, FilmsModule, NavmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercice';
}
