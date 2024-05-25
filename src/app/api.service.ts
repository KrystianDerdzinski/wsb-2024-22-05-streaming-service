import { HttpClient } from '@angular/common/http';
import { API_KEY } from './API_KEY.const';
import { Injectable } from '@angular/core';
import { PlaylistInterface } from './interfaces/playlist.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPlaylistName$() {
    const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&key=${API_KEY}`;

    return this.http.get<PlaylistInterface>(url);
  }
}
