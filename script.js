const message =
  "Chúc cục vàng yêu của anh luôn luôn hạnh phúc mạnh mẽ";
let index = 0;
const typingSpeed = 80; // Adjust the typing speed in milliseconds

function typeMessage() {
  if (index < message.length) {
    document.getElementById("typed-message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage, typingSpeed);

    if (index % 10 === 0) {
      document.getElementById("typed-message").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  } else {
    document.getElementById("typed-message").scrollIntoView({ behavior: 'smooth', block: 'end' });
  
  } 
}

window.onload = function () {
  typeMessage();
};
