var r = document.getElementById("run");
var audio = new Audio('running.mp3');
function keepRun(){
    audio.play();
}
function hideBut() {
  var x = document.getElementById("container");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
}
var video = document.getElementById("video");
function playVid() {
  if (video.paused) {
    video.pause();
  } else {
    video.play();
  }
}