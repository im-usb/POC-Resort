//header
let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-100px"; // Hide the navbar
  } else {
    // Scrolling up
    navbar.style.top = "0"; // Show the navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// JavaScript for carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all slides
  const slides = document.querySelectorAll(".slide");
  // Set index for current active slide
  let currentIndex = 0;
  // Variable to store the interval ID
  let intervalId;

  // Function to show slide by index
  const showSlide = (index) => {
    // Remove active class from all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    // Add active class to the slide at the given index
    slides[index].classList.add("active");
  };

  // Function to show next slide
  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  // Function to show previous slide
  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  // Event listener for next button click
  document.querySelector(".next").addEventListener("click", () => {
    showNextSlide();
    resetInterval();
  });

  // Event listener for previous button click
  document.querySelector(".prev").addEventListener("click", () => {
    showPrevSlide();
    resetInterval();
  });

  // Function to automatically change slide every 5 seconds
  const autoChangeSlide = () => {
    showNextSlide();
  };

  // Function to reset interval
  const resetInterval = () => {
    // Clear existing interval
    clearInterval(intervalId);
    // Start a new interval
    intervalId = setInterval(autoChangeSlide, 5000);
  };

  // Start the initial interval
  resetInterval();
});

// Services carouse
const servicesCarousel = document.querySelector(".services-carousel");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");

let currentIndex = 0;
const totalServices = servicesCarousel.children.length - 2;
let intervalId; // Variable to store the interval ID

function moveCarousel(direction) {
  if (direction === "left") {
    currentIndex = (currentIndex - 1 + totalServices) % totalServices;
  } else {
    currentIndex = (currentIndex + 1) % totalServices;
  }
  const offset = -currentIndex * 33.5;
  servicesCarousel.style.transform = `translateX(${offset}%)`;
}

// Function to start the interval
function startCarouselInterval() {
  intervalId = setInterval(() => {
    moveCarousel("right");
  }, 3000); // Change image every 3 seconds (adjust as needed)
}

// Function to stop the interval
function stopCarouselInterval() {
  clearInterval(intervalId);
}

// Start the interval initially
startCarouselInterval();

// Add event listeners for mouse enter and mouse leave to start and stop the interval
servicesCarousel.addEventListener("mouseenter", stopCarouselInterval);
servicesCarousel.addEventListener("mouseleave", startCarouselInterval);

leftButton.addEventListener("click", () => {
  moveCarousel("left");
});

rightButton.addEventListener("click", () => {
  moveCarousel("right");
});
