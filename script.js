// Message content
const message = `
Happy Birthday ny iu dấu của anh ❤️. Mới đây mà đã gần một năm rồi, 
nhanh quá à 🚀, anh cảm ơn người iu luôn ở bên quan tâm, chăm sóc lo lắng 
cho anh mỗi ngày 🌻. Tuổi mới anh chúc ny có tất cả, thành công trong sự nghiệp, công việc
🎁, gia đình luôn vui vẻ và hoà thuận, ny của anh đạt được nhũng dự định trong tương lai và 
chúc 2 đứa mình sẽ luôn hạnh phúc, mong trời sẽ thương em thương anh và
cho đôi mình mau về chung 1 nhà nha em iu 💑🏡 I love you so much ❤️❤️❤️❤️❤️
`;

let index = 0; // To keep track of the current character index
const typingSpeed = 50; // Adjust the typing speed in milliseconds

function typeMessage() {
  if (index < message.length) {
    const typedMessageElement = document.getElementById("typed-message");
    typedMessageElement.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, typingSpeed);

    // Scroll into view with each new character
    typedMessageElement.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  } else {
    // Once the message is fully typed, scroll it completely into the top of the view if needed
    document
      .getElementById("typed-message")
      .scrollIntoView({ behavior: "smooth", block: "start" });
    // Wait 1s after the message has been typed before showing the image grid
    setTimeout(showImageGrid, 1000);
  }
}

function showImageGrid() {
  const imageGrid = document.querySelector(".image-grid");
  imageGrid.classList.remove("hidden");
  imageGrid.classList.add("fade-in");
  imageGrid.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Event listener for the 'reveal' button
document.getElementById("revealButton").addEventListener("click", function () {
  const typedMessage = document.getElementById("typed-message");

  // Remove the 'hidden' class and start typing the message
  typedMessage.classList.remove("hidden");
  typeMessage();

  // Hide the button after click
  this.style.display = "none";
});

// Audio control event listeners
document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("backgroundMusic");
  const playPauseButton = document.querySelector(".play-pause");
  const volumeControl = document.querySelector(".volume-control");

  playPauseButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      this.textContent = "Pause";
    } else {
      backgroundMusic.pause();
      this.textContent = "Play";
    }
  });

  volumeControl.addEventListener("input", function () {
    backgroundMusic.volume = this.value;
  });
});
