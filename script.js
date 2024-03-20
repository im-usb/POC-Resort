//header
const navbar = document.querySelector("header");
let lastScrollTop = navbar.offsetHeight + 150;

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    // navbar.style.top = "-100px"; // Hide the navbar
    navbar.classList.add("active");
  } else {
    // Scrolling up
    // navbar.style.top = "0"; // Show the navbar
    navbar.classList.remove("active");
  }

  // lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// header nav-items rwd
const navitems = document.querySelector(".nav-items");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  navitems.classList.toggle("active");
  document.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(navitems) &&
      !e.composedPath().includes(menuBtn)
    ) {
      navitems.classList.remove("active");
    }
  });
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

var swiper = new Swiper(".themeSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -40,
    depth: 200,
    modifier: 3,
    slideShadows: false,
  },
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  loop: true,
  autoplay: {
    delay: 2000,
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

// back to top buttom
document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".top-btn");
  const rotated = document.querySelector(".rotated");
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < topBtn.offsetHeight) {
      topBtn.querySelector("a").href = "#about-section";
      topBtn.style.animation = "towards-top 0.5s ease-in-out";
      topBtn.classList.remove("rotated");
    } else {
      topBtn.querySelector("a").href = "#";
      topBtn.style.animation = "towards-bottom 0.5s ease-in-out";
      topBtn.classList.add("rotated");
    }
  };
  window.addEventListener("scroll", handleScroll);
});
