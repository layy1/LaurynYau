
'use strict';

// Array of image file paths
var homeImgArray = [
  "img/home1.png",
  "img/home2.png",
  "img/home3.png",
  "img/home4.png"
];

var starImgArray = [
  "img/star1.png",
  "img/star2.png",
  "img/star3.png"
];


// Track which image we're on
var homeIndex = 0;
var starIndex = 0;

// Function to change the image
function changeHomeImage() {
  document.getElementById("home-img").src = homeImgArray[homeIndex];
  homeIndex = (homeIndex + 1) % homeImgArray.length;
  // Change every 1 second
  setTimeout(changeHomeImage, 1000);
}

function changeStarImage() {
  document.getElementById("star-img").src = starImgArray[starIndex];
  starIndex = (starIndex + 1) % starImgArray.length;
  // Change every 1 second
  setTimeout(changeStarImage, 1000);
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}



changeHomeImage();
changeStarImage();
