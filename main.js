const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  // will get current class
  const current = document.querySelector(".current");
  // will remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    // add current to next sibling if true
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start if no next element sibling
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // will get current class
  const current = document.querySelector(".current");
  // will remove current class
  current.classList.remove("current");
  // check for prev slide
  if (current.previousElementSibling) {
    // add current to previous sibling if true
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to last sibling
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

// button events
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// auto slide
if (auto) {
  // run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
