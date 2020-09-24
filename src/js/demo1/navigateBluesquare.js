import { gsap } from "gsap";
// gsap.registerPlugin(CSSPlugin);

export default class SeeProject {
  constructor(el) {
    this.DOM = { el: el };

    // See More Buttons
    this.DOM.seeMore = this.DOM.el.querySelector(".see__more");

    this.initEvents();
  }

  initEvents() {
    this.onClickBtnSeeMore = () => this.navigate();
    this.DOM.seeMore.addEventListener("click", () => {
      this.onClickBtnSeeMore();
    });
  }

  navigate() {
    console.log(this.DOM, document.body.getElementsByClassName(".cursor"));
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
          visibility: "hidden",
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
          display: "block",
          // marginTop: "-100%",
        },
        "-=0.3"
      );
  }
}
