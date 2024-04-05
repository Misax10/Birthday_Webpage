// Message content
const message = `
Happy Birthday ny iu dấu của anh ❤️. Mới đây mà đã gần một năm rồi, 
nhanh quá à 🚀, anh cảm ơn người iu luôn ở bên quan tâm, chăm sóc lo lắng 
cho anh mỗi ngày 🌻. Tuổi mới anh chúc ny có tất cả, thành công trong sự nghiệp, công việc
🎁, gia đình luôn vui vẻ và hoà thuận, ny của anh đạt được nhũng dự định trong tương lai và 
chúc 2 đứa mình sẽ luôn hạnh phúc, mong trời sẽ thương em thương anh và
cho đôi mình mau về chung 1 nhà nha em iu 💑🏡 I love you so much and I'd love to spent my life with you PS:
Ký tên from : AKCC của QMCC
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
    // Once the message is fully typed, scroll it completely into the top of the view
    typedMessageElement.scrollIntoView({ behavior: "smooth", block: "start" });
    // Wait 1s after the message has been typed before showing the image grid
    setTimeout(showImageGrid, 100);
  }
}

function showImageGrid() {
  const imageGrid = document.querySelector(".image-grid");
  if (imageGrid) {
    // Check if the imageGrid exists
    imageGrid.classList.remove("hidden");
    imageGrid.classList.add("fade-in");
    imageGrid.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function showMessage() {
  const typedMessageContainer = document.getElementById("typed-message");

  typedMessageContainer.classList.remove("hidden");

  // Start playing background music as the message appears
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();

  // Scroll the message into view and start typing
  typedMessageContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  typeMessage();
  setTimeout(showImageGrid, 5000);
}

document.getElementById("revealButton").addEventListener("click", function () {
  const birthdayVideo = document.getElementById("birthdayVideo");

  // Hide the button
  this.style.display = "none";

  // Show, play, and scroll the video into view
  birthdayVideo.classList.remove("hidden");
  birthdayVideo.play();
  birthdayVideo.scrollIntoView({ behavior: "smooth", block: "start" });

  // After the video, show the message
  birthdayVideo.onended = showMessage;
});

// Controls for background music and volume
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
