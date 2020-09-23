// let spanito = document.querySelectorAll("[data-word]");
// // .classList.add("test");
// spanito.forEach((e) => {
//   console.log(e);
// });

////////// Change attributes "stroke" from path object

// let iconesSvg = document.querySelectorAll("path");
// let arrowSvg = document.getElementsByClassName("arrow");
// console.log([...iconesSvg], typeof arrowSvg);
// console.log(
//   [...iconesSvg].map((e) => {
//     return e;
//   })
// );
// console.log(
//   "nextSlide.DOM.el",
//   iconesSvg.setAttribute("stroke", "#b2b2b2")
// );

// setAttributeNodeNS;

// document.body.getElementsByClassName("arrow").style.fill = "blue";

// .to(
//   nextSlide.DOM.el,
//   {
//     backgroundColor: "#3f51b58f",
//     // duration: 3,
//     ease: "Power2.easeInOut",
//   },
//   "-=1.5"
// );

// console.log(
//   "nextSlide",
//   nextSlide.DOM.el.querySelector("[data-word='Crypto']")
// );

//  document.body.style.backgroundImage =
//    "linear-gradient(to left, #e53935, #e8ad34)";

if (nextSlide.DOM.el.querySelector("[data-word='Auto']")) {
  document.body.style.background = `url(${bckgAv})`;

  for (let i = 0; i < allPath.length; i++) {
    allPath[i].setAttribute("fill", "#319fe8");
    allPath[i].setAttribute("stroke", "#319fe8");
  }
} else if (nextSlide.DOM.el.querySelector("[data-word='Digital']")) {
  document.body.style.background = `url(${bckgDigital})`;
  document.body.style.backgroundPosition = "center";

  for (let i = 0; i < allPath.length; i++) {
    allPath[i].setAttribute("fill", "#ff5f5f");
    allPath[i].setAttribute("stroke", "#ff5f5f");
  }
} else if (nextSlide.DOM.el.querySelector("[data-word='Blue']")) {
  nextSlide.DOM.el.classList.add("text-bluesquare");

  for (let i = 0; i < allPath.length; i++) {
    allPath[i].setAttribute("fill", "#f8a815");
    allPath[i].setAttribute("stroke", "#f8a815");
    console.log("heelooooooo");
  }
  document.body.classList.remove("background-devoteam");
  document.body.classList.add("background-bluesquare");
} else if (nextSlide.DOM.el.querySelector("[data-word='Reg']")) {
  for (let i = 0; i < allPath.length; i++) {
    allPath[i].setAttribute("fill", "#987148");
    allPath[i].setAttribute("stroke", "#987148");
  }
} else if (nextSlide.DOM.el.querySelector("[data-word='Ania']")) {
  for (let i = 0; i < allPath.length; i++) {
    allPath[i].setAttribute("fill", "#01968d");
    allPath[i].setAttribute("stroke", "#01968d");
  }
} else if (nextSlide.DOM.el.querySelector("[data-word='Devo']")) {
  document.body.style.backgroundImage =
    "linear-gradient(to left, #e53935, #e8ad34)";
  // document.body.classList.add("background-devoteam");

  for (let i = 0; i < allPath.length; i++) {
    allPath[i].setAttribute("fill", "#ff8089");
    allPath[i].setAttribute("stroke", "#ff8089");
    document.body.style.background = null;
    document.body.style.backgroundPosition = null;
  }
} else {
  document.body.style.background = null;
  document.body.style.backgroundPosition = null;
  for (let i = 0; i < allPath.length; i++) {
    allPath[i].setAttribute("fill", "#6581e1");
    allPath[i].setAttribute("stroke", "#6581e1");
  }
}
