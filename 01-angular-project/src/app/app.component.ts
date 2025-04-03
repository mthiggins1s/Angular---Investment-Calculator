import { Component } from '@angular/core';
import { SongsComponent } from "./songs/songs.component";
import { songs_list } from './songs-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  songs = songs_list;
}
