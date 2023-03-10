import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  video: any;
  volumeButton = true;
  percentage: number;
  viewMode = true;

  ngOnInit(): void {
    this.video = <HTMLVideoElement>document.getElementById("video");
  }

  viewModeChange(mode: number) {
    this.viewMode = !this.viewMode;
    this.video.muted = (mode == 1) ? true : false;
  }

  videoVolume() {
    this.video.muted = !this.video.muted;
    this.volumeButton = this.video.muted ? false : true;
  }

  videoPlay() {
    let video = <HTMLVideoElement>document.getElementById("video");
    let playButton = document.getElementById("play_button");

    if (video.paused) {
      video.play();
      playButton.innerHTML = '<img src="../assets/img/play-icon.svg" alt="play-icon" (click)="videoPlay()">';
    } else {
      video.pause();
      playButton.innerHTML = '<img src="../assets/img/pause-icon.svg" alt="pause-icon" (click)="videoPlay()">'
    }
  }

  onTimeUpdate(){
    this.percentage = (this.video.currentTime / this.video.duration) * 100;
  }

  goToLink() {
    window.open("https://answerly.io/facepop/", "_blank")
  }
}
