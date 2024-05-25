import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistInterface } from './interfaces/playlist.interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  playlist$: Observable<PlaylistInterface> = this.apiService.getPlaylistName$();

  constructor(private apiService: ApiService) {}
}
