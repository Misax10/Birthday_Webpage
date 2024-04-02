let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Typing effect for message
const message = "Here's to another year of wonderful adventures together!";
let index = 0;

function typeMessage() {
    if (index < message.length) {
        document.getElementById("typed-message").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeMessage, 150); // Speed of typing
    }
}

window.onload = function() {
    typeMessage();
}
