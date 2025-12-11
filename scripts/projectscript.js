'use strict';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  console.log("Hamburger clicked"); // debug
  navMenu.classList.toggle("active");
});
