import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { PlaylistItemsInterface } from '../interfaces/playlist-items.interface';
import { PlaylistInterface } from '../interfaces/playlist.interface';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  playlist$: Observable<PlaylistInterface> = this.apiService.getPlaylistName$();

  playlistItems$: Observable<PlaylistItemsInterface> =
    this.apiService.getPlaylistItems$();

  constructor(private apiService: ApiService) {}
}
