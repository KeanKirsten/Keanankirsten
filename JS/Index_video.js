var video = document.getElementById("videoLogo");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 500);

});

window.onload = function() {
  window.setTimeout(fadeout, 7000); //7 seconds
}