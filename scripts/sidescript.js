
console.log("Script loaded");
console.log(document.querySelector('.hamburger'));
console.log(document.querySelector('.nav-menu'));
'use strict';

var sideImgArray = [
  "img/side1.png",
  "img/side2.png"
];

var starImgArray = [
  "img/star1.png",
  "img/star2.png",
  "img/star3.png"
];

var sideIndex = 0;
var starIndex = 0;

function changeSideImage() {
  document.getElementById("side-img").src = sideImgArray[sideIndex];
  sideIndex = (sideIndex + 1) % sideImgArray.length;
  // Change every 1 second
  setTimeout(changeSideImage, 1000);
}

function changeStarImage() {
  document.getElementById("star-img").src = starImgArray[starIndex];
  starIndex = (starIndex + 1) % starImgArray.length;
  // Change every 1 second
  setTimeout(changeStarImage, 1000);
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  console.log("Hamburger clicked"); // debug
  navMenu.classList.toggle("active");
});

changeSideImage();
changeStarImage();
