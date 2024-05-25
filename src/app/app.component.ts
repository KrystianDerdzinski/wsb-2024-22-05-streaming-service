import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistInterface } from './interfaces/playlist.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  playlist: PlaylistInterface;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPlaylistName$().subscribe((response) => {
      console.log(response);
    });
  }
}
