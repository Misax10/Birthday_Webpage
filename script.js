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
  } else {
    // Adjusted to ensure the entire greeting card is brought into view after typing completes
    setTimeout(() => {
      document.querySelector(".greeting-card").scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 1000); // Adding a delay to ensure any dynamic content changes have settled
  }
}

document.getElementById("revealButton").addEventListener("click", function () {
  // Elements selection
  const typedMessage = document.getElementById("typed-message");
  const imageGrid = document.querySelector(".image-grid");

  // Removing the 'hidden' class and adding 'fade-in' with a delay to ensure smooth transition
  setTimeout(() => {
    typedMessage.classList.remove("hidden");
    typedMessage.classList.add("fade-in");
    imageGrid.classList.remove("hidden");
    imageGrid.classList.add("fade-in");
    
    // Initiate the typing effect upon reveal
    typeMessage();
  }, 100); // Adjusted delay for better visual effect

  // Hide the button after click
  this.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("backgroundMusic");
  const playPauseButton = document.querySelector(".play-pause");
  const volumeControl = document.querySelector(".volume-control");

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
