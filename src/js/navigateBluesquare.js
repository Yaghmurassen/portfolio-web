import { gsap } from "gsap";
// import Swup from 'swup';
// gsap.registerPlugin(CSSPlugin);

export default class SeeProject {
  constructor(el) {
    this.DOM = { el: el };
    // See More Buttons
    this.DOM.seeMore = this.DOM.el.querySelector(".see__more");
    this.back = document.body.querySelector(".go-back");
    // setTimeout(() => {
    this.initEvents();
    // }, 1000);
  }

  initEvents() {
    this.onClickBtnSeeMore = () => this.navigate();
    this.DOM.seeMore.addEventListener("click", () => {
      this.onClickBtnSeeMore();
    });

    this.onClickBtnBack = () => this.navigateBack();
    this.back.addEventListener("click", () => {
      this.onClickBtnBack();
    });
  }

  navigate() {
    gsap
      .timeline({
        defaults: { duration: 0.8, ease: "power4.EaseInOut" },
        // onStart: () => {},
        onComplete: () => {
          window.scrollTo(0, 0);
        },
      })
      // .addLabel("start", 0)
      // .to(this.DOM.el.querySelector(".slide"), {
      //   opacity: 0,
      //   visibility: "hidden",
      // })
      .to(
        this.DOM.el.querySelectorAll(".slides__nav"),
        {
          opacity: 0,
          // visibility: "hidden",
        },
        "-=0.8"
      )
      .to(
        this.DOM.el,
        {
          width: "unset",
          display: "none",
        },
        "-=1"
      )
      .to(
        document.body.querySelector(".frame__links"),
        {
          display: "none",
        },
        "-=1"
      )
      .to(
        document.body.querySelector(".bluesquare"),
        {
          opacity: 1,
          display: "block",
          // marginTop: "-100%",
        },
        "-=0.3"
      );
  }

  navigateBack() {
    gsap
      .timeline({
        defaults: { duration: 0.1, ease: "power4.EaseInOut" },
        // onStart: () => {},
        onComplete: () => {
          window.scrollTo(0, 0);
        },
      })
      // .addLabel("start", 0)
      .to(this.DOM.el.querySelector(".slide"), {
        opacity: 1,
      })
      .to(
        this.DOM.el.querySelectorAll(".slides__nav"),
        {
          opacity: 1,
        },
        "-=0.8"
      )
      .to(
        this.DOM.el,
        {
          width: "100vw",
          display: "grid",
        },
        "-=1"
      )
      .to(
        document.body.querySelector(".frame__links"),
        {
          display: "flex",
        },
        "-=1"
      )
      .to(
        document.body.querySelector(".bluesquare"),
        {
          display: "none",
        },
        "-=0.3"
      );
  }
}
