const typingElement = document.querySelector(".para");
const fullText = typingElement.textContent;
typingElement.textContent = ""; // Clear the text

let i = 0;

function typeEffect() {
  if (i < fullText.length) {
    typingElement.textContent += fullText.charAt(i);
    i++;
    setTimeout(typeEffect, 50); // Speed of typing
  }
}

typeEffect();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };


});