'use strict';

var aboutImgArray = [
  "img/about1.png",
  "img/about2.png"
];

var aboutIndex = 0;

function changeAboutImage() {
  document.getElementById("about-img").src = aboutImgArray[aboutIndex];
  aboutIndex = (aboutIndex + 1) % aboutImgArray.length;
  // Change every 1 second
  setTimeout(changeAboutImage, 1000);
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  console.log("Hamburger clicked"); // debug
  navMenu.classList.toggle("active");
});

changeAboutImage();
