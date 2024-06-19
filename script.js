// script.js
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let currentIndex = 0;
let slideInterval;

function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth ; // Adding margin between slides
    const newTransformValue = -(currentIndex * slideWidth);
    slideTrack.style.transform = `translateX(${newTransformValue}px)`;
}

function moveToNextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first slide
    }
    updateSliderPosition();
}

function moveToPreviousSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop to the last slide
    }
    updateSliderPosition();
}

function startSlideShow() {
    slideInterval = setInterval(moveToNextSlide, 5000); // Change slide every 5 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

leftButton.addEventListener('click', () => {
    stopSlideShow();
    moveToPreviousSlide();
    startSlideShow();
});

rightButton.addEventListener('click', () => {
    stopSlideShow();
    moveToNextSlide();
    startSlideShow();
});

// Start the slideshow on load
startSlideShow();
updateSliderPosition(); // Initial call to set the slider position
