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

// Home Carousel
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  let intervalId;

  const showSlide = (index) => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  };

  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  document.querySelector(".next").addEventListener("click", () => {
    showNextSlide();
    resetInterval();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    showPrevSlide();
    resetInterval();
  });

  const autoChangeSlide = () => {
    showNextSlide();
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(autoChangeSlide, 5000);
  };
  resetInterval();
});

// about carousel
var swiper = new Swiper(".themeSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    stretch: 130,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
  },
  loop: true,
  slidesPerView: 2,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});

// Services carousel
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
