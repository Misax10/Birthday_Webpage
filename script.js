const message =
  "Happy Birthday ny iu dấu của anh.Mới đây mà đã gần một năm rồi nhanh quá à";
let index = 0;
const typingSpeed = 80; // Adjust the typing speed in milliseconds

function typeMessage() {
  if (index < message.length) {
    document.getElementById("typed-message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, typingSpeed);

    if (index % 10 === 0) {
      document
        .getElementById("typed-message")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  } else {
    document
      .getElementById("typed-message")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }
}

document.getElementById("revealButton").addEventListener("click", function () {
  // Select the elements
  var typedMessage = document.getElementById("typed-message");
  var imageGrid = document.querySelector(".image-grid");

  // Remove the 'hidden' class and add the 'fade-in' class
  typedMessage.classList.remove("hidden");
  typedMessage.classList.add("fade-in");

  imageGrid.classList.remove("hidden");
  imageGrid.classList.add("fade-in");

  // Optionally hide the button after click
  this.style.display = "none";

  // If you want to initiate the typing effect upon reveal, call the typing function here
  typeMessage(); // Uncomment if you want the typing effect to start now
});
document.addEventListener('DOMContentLoaded', function() {
  var backgroundMusic = document.getElementById('backgroundMusic');
  var playPauseButton = document.querySelector('.play-pause');
  var volumeControl = document.querySelector('.volume-control');

  playPauseButton.addEventListener('click', function() {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          playPauseButton.textContent = 'Pause';
      } else {
          backgroundMusic.pause();
          playPauseButton.textContent = 'Play';
      }
  });

  volumeControl.addEventListener('input', function() {
      backgroundMusic.volume = this.value;
  });
});
