var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Display the selected slide
  slides[n].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0; // Wrap around to the first slide
  }
  showSlide(currentSlide);
}

// Display the first slide initially
showSlide(currentSlide);

// Automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 3000);