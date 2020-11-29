import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { gsap } from "gsap";
import Slide from "../slide";
import bckgAv from "../../imgYag/AV/background-av.png";
import bckgDigital from "../../imgYag/DigitalIn/Background.png";

export default class Slideshow {
  constructor(el) {
    const testBluesquare = false;
    this.DOM = { el: el };

    // Navigation buttons
    this.DOM.navigation = {
      prev: this.DOM.el.querySelector(".slides__nav--prev"),
      next: this.DOM.el.querySelector(".slides__nav--next"),
    };

    // See More Buttons
    this.DOM.seeMore = {
      see: this.DOM.el.querySelector(".see__more"),
    };

    // Initialize the Slide instances and store that in an array
    this.slides = [];
    [...this.DOM.el.querySelectorAll(".slide")].forEach((slide) =>
      this.slides.push(new Slide(slide))
    );

    // Index of the current slide
    this.current = 0;
    // Total slides
    this.slidesTotal = this.slides.length;
    // positions (in percentages) for the images movement for both directions
    // example: the second image (top right one) will translate in the y-axis -150% when clicking the next button but when clicking the prev button it will instead translate in the x-axis 150%
    this.positions = {
      x: {
        next: [-150, 0, 0, 150],
        prev: [0, 150, -150, 0],
      },
      y: {
        next: [0, -150, 150, 0],
        prev: [-150, 0, 0, 150],
      },
    };
    this.initEvents();
  }

  initEvents() {
    this.onClickPrevEv = () => this.navigate("prev");
    this.onClickNextEv = () => this.navigate("next");
    this.DOM.navigation.prev.addEventListener("click", () =>
      this.onClickPrevEv()
    );
    this.DOM.navigation.next.addEventListener("click", () =>
      this.onClickNextEv()
    );
    // this.DOM.seeMore.addEventListener("click", () => {});
  }

  navigate(direction) {
    if (this.isAnimating) {
      return false;
    }

    const currentSlide = this.slides[this.current];
    this.current =
      direction === "next"
        ? this.current < this.slidesTotal - 1
          ? ++this.current
          : 0
        : this.current > 0
          ? --this.current
          : this.slidesTotal - 1;
    const nextSlide = this.slides[this.current];

    gsap
      .timeline({
        defaults: { duration: 0.8, ease: "power4.inOut" },
        onStart: () => (this.isAnimating = true),
        onComplete: () => {
          // Remove "current" class
          currentSlide.DOM.el.classList.remove("slide--current");
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      // Animate current title out (stagger the characters)
      .to(
        currentSlide.DOM.chars,
        {
          y: direction === "next" ? "100%" : "-100%",
          rotation: direction === "next" ? 3 : -3,
          stagger: direction === "next" ? -0.015 : 0.015,
        },
        "start"
      )
      // Animate current images out
      .to(
        currentSlide.DOM.imgs,
        {
          x: (pos) => `${this.positions.x[direction][pos]}%`,
          y: (pos) => `${this.positions.y[direction][pos]}%`,
          opacity: 0,
        },
        "start"
      )
      .addLabel("upcoming", 0.4)
      .add(() => {
        // Set up upcoming images and text default style:
        gsap.set(nextSlide.DOM.imgs, { opacity: 0 });
        gsap.set(nextSlide.DOM.chars, {
          y: direction === "next" ? "-100%" : "100%",
          rotation: direction === "next" ? 3 : -3,
        });
        // Add "current" class
        nextSlide.DOM.el.classList.add("slide--current");
      }, "upcoming")
      // Animate upcoming title in (stagger the characters)
      .to(
        nextSlide.DOM.chars,
        {
          y: "0%",
          rotation: 0,
          ease: "power4",
          stagger: direction === "next" ? -0.015 : 0.015,
        },
        "upcoming"
      )
      // Animate upcoming images in
      .to(
        nextSlide.DOM.imgs,
        {
          startAt: {
            x: (pos) =>
              `${this.positions.x[this.reverseDirection(direction)][pos]}%`,
            y: (pos) =>
              `${this.positions.y[this.reverseDirection(direction)][pos]}%`,
          },
          x: "0%",
          y: "0%",
          opacity: 1,
          ease: "power4",
        },
        "upcoming"
      );

    // console.log("currentSlide", currentSlide.DOM.el);
    // console.log("nextSlide", nextSlide.DOM.el);

    let allPath = document.getElementsByTagName("path");

    if (nextSlide.DOM.el.querySelector("[data-word='Auto']")) {
      document.body.style.background = `url(${bckgAv})`;

      for (let i = 0; i < allPath.length; i++) {
        allPath[i].setAttribute("fill", "#319fe8");
        allPath[i].setAttribute("stroke", "#319fe8");
      }
    }

    if (nextSlide.DOM.el.querySelector("[data-word='Digital']")) {
      document.body.style.background = `url(${bckgDigital})`;
      document.body.style.backgroundPosition = "center";

      for (let i = 0; i < allPath.length; i++) {
        allPath[i].setAttribute("fill", "#ff5f5f");
        allPath[i].setAttribute("stroke", "#ff5f5f");
      }
    }

    if (nextSlide.DOM.el.querySelector("[data-word='Blue']")) {
      nextSlide.DOM.el.classList.add("text-bluesquare");

      for (let i = 0; i < allPath.length; i++) {
        allPath[i].setAttribute("fill", "#f8a815");
        allPath[i].setAttribute("stroke", "#f8a815");
      }

      document.body.style.background = null;

      document.body.classList.remove("background-devoteam");
      document.body.classList.remove("background-ania");
      document.body.classList.remove("background-crypto");
      document.body.classList.remove("background-regcard");
      document.body.classList.add("background-bluesquare");

      // gsap.to(this.DOM);
    }

    if (nextSlide.DOM.el.querySelector("[data-word='Reg']")) {
      for (let i = 0; i < allPath.length; i++) {
        allPath[i].setAttribute("fill", "#987148");
        allPath[i].setAttribute("stroke", "#987148");
      }
      document.body.style.background = null;

      document.body.classList.remove("background-devoteam");
      document.body.classList.remove("background-bluesquare");
      document.body.classList.remove("background-ania");
      document.body.classList.remove("background-crypto");
      document.body.classList.add("background-regcard");
    }

    if (nextSlide.DOM.el.querySelector("[data-word='Ania']")) {
      for (let i = 0; i < allPath.length; i++) {
        allPath[i].setAttribute("fill", "#01968d");
        allPath[i].setAttribute("stroke", "#01968d");
      }
      document.body.style.background = null;

      document.body.classList.remove("background-devoteam");
      document.body.classList.remove("background-bluesquare");
      document.body.classList.remove("background-regcard");
      document.body.classList.remove("background-crypto");
      document.body.classList.add("background-ania");
    }

    if (nextSlide.DOM.el.querySelector("[data-word='Devo']")) {
      for (let i = 0; i < allPath.length; i++) {
        allPath[i].setAttribute("fill", "#ff8089");
        allPath[i].setAttribute("stroke", "#ff8089");
      }
      document.body.style.background = null;

      document.body.classList.remove("background-ania");
      document.body.classList.remove("background-bluesquare");
      document.body.classList.remove("background-regcard");
      document.body.classList.remove("background-crypto");
      document.body.classList.add("background-devoteam");
    }

    if (nextSlide.DOM.el.querySelector("[data-word='Crypto']")) {
      for (let i = 0; i < allPath.length; i++) {
        allPath[i].setAttribute("fill", "#6581e1");
        allPath[i].setAttribute("stroke", "#6581e1");
      }
      document.body.style.background = null;

      document.body.classList.remove("background-ania");
      document.body.classList.remove("background-bluesquare");
      document.body.classList.remove("background-regcard");
      document.body.classList.remove("background-devoteam");
      document.body.classList.add("background-crypto");
    }
  }

  reverseDirection(direction) {
    return direction === "next" ? "prev" : "next";
  }
  test() {
    alert("hello");
  }
}
