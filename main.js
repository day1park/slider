const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
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
