import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;
 
   get imagePath() {
     return 'assets/songs-covers/' + this.avatar
   }
 
   onSelectSong() {}
 }