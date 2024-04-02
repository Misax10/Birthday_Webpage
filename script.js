const message =
  "Wishing you all the happiness your heart can hold... Here's to another year of wonderful adventures together!";
let index = 0;
const typingSpeed = 100; // Adjust the typing speed in milliseconds

function typeMessage() {
  if (index < message.length) {
    document.getElementById("typed-message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, typingSpeed);
  }
}

window.onload = function () {
  typeMessage();
};
