// Slideshow functionality
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

showSlide(); // show first slide
setInterval(showSlide, 5000); // change every 5 seconds

// Scroll animations
const faders = document.querySelectorAll('.fade-in-up');

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(fade => {
    const boxTop = fade.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      fade.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);