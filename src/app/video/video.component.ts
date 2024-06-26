import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../safe.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [SafePipe, MatIconModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements OnInit {
  videoUrl: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((item) => {
      this.videoUrl = `https://www.youtube.com/embed/${item['id']}`;
    });
  }
}
