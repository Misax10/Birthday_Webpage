const message =
  "Wishing you all the happiness your heart can hold... Here's to another year of wonderful adventures together!";
let index = 0;
const typingSpeed = 80; // Adjust the typing speed in milliseconds

function typeMessage() {
  if (index < message.length) {
    document.getElementById("typed-message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, typingSpeed);

    // Scroll into view the first time we append text
    if (index === 1) {
      document.getElementById("typed-message").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } else {
    // Optionally, ensure the message is fully visible after typing is complete
    // This can be useful if the last part of the message is not entirely in the viewport
    document.getElementById("typed-message").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

window.onload = function () {
  typeMessage();
};
