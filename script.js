const coverContainer = document.querySelector('.cover-container');
const images = document.querySelectorAll('.cover-container img');

let currentIndex = 0;
let intervalId;

// Clone the images for infinite loop
const clonedImages = [];
images.forEach(image => {
  const clone = image.cloneNode(true);
  clonedImages.push(clone);
  coverContainer.appendChild(clone);
});

function startCarousel() {
  intervalId = setInterval(() => {
    currentIndex++;
    coverContainer.style.transition = 'transform 0.5s ease-in-out';
    coverContainer.style.transform = `translateX(${-currentIndex * 220}px)`;

    // Check if reached the last original image, reset to the first one
    if (currentIndex >= images.length) {
      setTimeout(() => {
        currentIndex = 0;
        coverContainer.style.transition = 'none';
        coverContainer.style.transform = 'translateX(0)';
      }, 1000); // Set timeout equal to transition duration
    }
  }, 2000); // Change the time for image transition (milliseconds)
}

// Start carousel on page load
window.onload = startCarousel;
