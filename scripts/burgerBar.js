"use strict";

export function burgerBarFnc() {
  const burgerBar = document.querySelector(".burger__bar");
  const navLists = document.querySelector(".nav");

  burgerBar.addEventListener("click", function () {
    navLists.classList.toggle("active-nav");

    const burgerMiddleLine = document.querySelector(".burger__middle-line");
    burgerMiddleLine.classList.toggle("burger__middle-line-hide");

    const burgerBarLines = document.querySelectorAll(".burger__lines");
    burgerBarLines.forEach(function (element) {
      element.classList.toggle("burger__lines-to-X");
    });
  });
}
