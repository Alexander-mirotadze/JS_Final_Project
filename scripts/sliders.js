"use strict";

export function allSlidersFnc() {
  // ! slider npm 1
  var splide = new Splide("#splide1", {
    direction: "ttb",
    height: "400px",
    // width: "80%",
    type: "slide",
    wheel: true,
    perPage: 1,
    pagination: true,
    rewind: true,
    autoplay: true,
    interval: 5000,
    speed: 3000,

    classes: {
      // Add classes for arrows.
      arrows: "splide__arrows new-beer-class-arrows",
      arrow: "splide__arrow new-beer-class-arrow",
      prev: "splide__arrow--prev new-beer-class-prev",
      next: "splide__arrow--next new-beer-class-next",

      // Add classes for pagination.
      pagination: "splide__pagination new-beer-class-pagination", // container
      page: "splide__pagination__page new-beer-class-page", // each button
    },
  });
  splide.mount();

  // ! slider npm 2
  var splide = new Splide("#splide2", {
    direction: "ttb",
    height: "400px",
    // width: "80%",
    type: "slide",
    wheel: true,
    perPage: 1,
    pagination: true,
    rewind: true,
    autoplay: true,
    interval: 5000,
    speed: 3000,

    classes: {
      // Add classes for arrows.
      arrows: "splide__arrows new-beer-class-arrows",
      arrow: "splide__arrow new-beer-class-arrow",
      prev: "splide__arrow--prev new-beer-class-prev",
      next: "splide__arrow--next new-beer-class-next",

      // Add classes for pagination.
      pagination: "splide__pagination new-beer-class-pagination", // container
      page: "splide__pagination__page new-beer-class-page", // each button
    },
  });
  splide.mount();

  // ! slider npm 3
  var splide = new Splide("#splide3", {
    direction: "ttb",
    height: "400px",
    // width: "80%",
    type: "slide",
    wheel: true,
    perPage: 1,
    pagination: true,
    rewind: true,
    autoplay: true,
    interval: 5000,
    speed: 3000,

    classes: {
      // Add classes for arrows.
      arrows: "splide__arrows new-beer-class-arrows",
      arrow: "splide__arrow new-beer-class-arrow",
      prev: "splide__arrow--prev new-beer-class-prev",
      next: "splide__arrow--next new-beer-class-next",

      // Add classes for pagination.
      pagination: "splide__pagination new-beer-class-pagination", // container
      page: "splide__pagination__page new-beer-class-page", // each button
    },
  });
  splide.mount();
}
