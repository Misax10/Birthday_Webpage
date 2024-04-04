const message = `
Happy Birthday ny iu dấu của anh. Mới đây mà đã gần một năm rồi nhanh quá à, 
cảm ơn người iu luôn ở bên quan tâm, chăm sóc lo lắng cho anh mỗi ngày. Tuổi mới anh chúc ny có tất cả và chúc 2 đứa mình
sẽ luôn hạnh phúc, mau về chung 1 nhà nha em iu
`;
let index = 0;
const typingSpeed = 50; // Adjust the typing speed in milliseconds

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

  // Use setTimeout to allow the display change to take effect
  setTimeout(() => {
    typedMessage.classList.remove("hidden");
    typedMessage.classList.add("fade-in");

    imageGrid.classList.remove("hidden");
    imageGrid.classList.add("fade-in");
  }, 10); // Small delay

  // Optionally hide the button after click
  this.style.display = "none";

  // If you want to initiate the typing effect upon reveal, call the typing function here
  typeMessage(); // Uncomment if you want the typing effect to start now
});
document.addEventListener("DOMContentLoaded", function () {
  var backgroundMusic = document.getElementById("backgroundMusic");
  var playPauseButton = document.querySelector(".play-pause");
  var volumeControl = document.querySelector(".volume-control");

  playPauseButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      playPauseButton.textContent = "Pause";
    } else {
      backgroundMusic.pause();
      playPauseButton.textContent = "Play";
    }
  });

  volumeControl.addEventListener("input", function () {
    backgroundMusic.volume = this.value;
  });
});


