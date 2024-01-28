import { preloadImages } from "./utils";
import Cursor from "./cursor";
import Slideshow from "./slideshow";
// import SeeProject from "./navigateBluesquare";

// Preload  images
Promise.all([preloadImages(".slide__img")]).then(() => {
  // Remove loader (loading class)
  document.body.classList.remove("loading");

  // Initialize custom cursor
  const cursor = new Cursor(document.querySelector(".cursor"));

  // Initialize the slideshow & the SeeProject
  new Slideshow(document.querySelector(".slides"));
  // new SeeProject(document.querySelector(".slides"));

  // mouse cursor hovers
  [
    ...document.querySelectorAll("a"),
    ...document.querySelectorAll(".slides__nav"),
  ].forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
  });
});

document.addEventListener("DOMContentLoaded", () => {
  new Slideshow(document.querySelector(".slides"));
  // Initialize the slideshow with the Carlili's background
  document.body.classList.add("background-carlili");

  // new SeeProject(document.querySelector(".slides"));
});
