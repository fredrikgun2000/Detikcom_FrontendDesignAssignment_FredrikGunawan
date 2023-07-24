$(document).ready(function () {
  if (typeof animateLogos === "function") {
    animateLogos();
  }
});

$(document).on("click", "#video-overlay i", function () {
  const video = $("#about-section video");
  if (video[0].paused) {
    video[0].play();
    $("#video-overlay").fadeOut();
    video.attr("controls", "controls");
  }

  video[0].addEventListener("pause", function () {
    $("#video-overlay").fadeIn();
    video.attr("controls", null);
  });

  video[0].addEventListener("ended", function () {
    $("#video-overlay").fadeIn();
    video.attr("controls", null);
  });
});

function animateLogos() {
  var canvas = document.getElementById("logos");
  var ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = 144;

  var logo = new Image();
  logo.src = "Assets/External/Home/Images/Logos.png";

  var x = 0;
  var y = 0;
  var speed = 2;

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(logo, x, y, 2880, 144);
    ctx.drawImage(logo, x + 2880, y, 2880, 144);
    x -= speed;
    if (x <= (canvas.width * -2) - 170) {
      x = 0;
    }
  }

  animate();

  $(window).resize(function () {
    canvas.width = window.innerWidth;
    canvas.height = 144;
  });
}
