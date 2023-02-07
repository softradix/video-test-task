import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'facepop';
  video: any;
  button_text: string;
  videoPlaying:boolean;
  percentage: number;
  ngOninit() {
    this.video = <HTMLVideoElement>document.getElementById("video");
  }
  videoMute() {
    // let video = <HTMLVideoElement>document.getElementById("video");
    let mute_text = document.getElementById("mute_text");
    console.log("mute_text", !this.video.muted)
    this.video.muted = !this.video.muted;
  }
  videoPlay() {
    let video = <HTMLVideoElement>document.getElementById("video");
    let playButton = document.getElementById("play_button");
    // Event listener for the play/pause button
    playButton.addEventListener("click", function () {
      if (video.paused == true) {
        // Play the video
        video.play();
        // Update the button text to 'Pause'
        playButton.innerHTML = "Pause";
      } else {
        // Pause the video
        video.pause();
        // Update the button text to 'Play'
        playButton.innerHTML = "Play";
      }
    });
    // if(!this.videoPlaying){
    //   this.video.play();
    //   this.videoPlaying = true;
    // }else{
    //   this.video.pause();
    //   this.videoPlaying = false;
    // }
  }
  onTimeUpdate(){
    let video = <HTMLVideoElement>document.getElementById("video");
    this.percentage = (video.currentTime / video.duration) * 100;
  }
}







