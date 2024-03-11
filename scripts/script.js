"use strict";
// ! dropProductList
const dropProductList = document.querySelector(".fa-solid");
const dropProductsDiv = document.querySelector(".drop__product__list");

function dropArrowUpDown() {
  const dropProductListDown = document.querySelector(".fa-square-caret-down");

  if (dropProductListDown) {
    dropProductList.classList.remove("fa-square-caret-down");
    dropProductList.classList.add("fa-square-caret-up");
  } else {
    dropProductList.classList.remove("fa-square-caret-up");
    dropProductList.classList.add("fa-square-caret-down");
  }
}

dropProductList.addEventListener("click", function () {
  dropProductsDiv.classList.toggle("active--products");
  dropArrowUpDown();
});

document.addEventListener("click", (body) => {
  //   console.log(body.target);
  const isDropDown = body.target.matches("[data-dropDown-icon]");
  //   console.log(isDropDown);
  const arrowDefault = document.querySelector(".fa-square-caret-down");
  //   console.log(arrowDefault);

  if (!isDropDown && !arrowDefault) {
    dropProductsDiv.classList.remove("active--products");
    dropArrowUpDown();
  }
});

// ! search
const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
const searchBtn = document.querySelector(".search__btn");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", function () {
  searchForm.classList.toggle("active__search");
  searchForm.reset();
});
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchForm.reset();
});

document.addEventListener("click", (body) => {
  const isSearchBar = body.target.matches("[search-bar]");
  // console.log(isRegAutauDiv);
  if (!isSearchBar) {
    searchForm.classList.remove("active__search");
    searchForm.reset();
  }
});

// ! user
const userRegAutauthoriz = document.getElementById("userRegAutauthoriz");
const regAutaudiv = document.querySelector(".reg__autau__btn__div");
userRegAutauthoriz.addEventListener("click", function () {
  regAutaudiv.classList.toggle("active-reg-btns");
});

document.addEventListener("click", (body) => {
  const isRegAutauDiv = body.target.matches("[data-reg-auta-div]");
  // console.log(isRegAutauDiv);
  if (!isRegAutauDiv) {
    regAutaudiv.classList.remove("active-reg-btns");
  }
});

// ! registration sign in
const signInBtn = document.getElementById("signe__in");
const signInDiv = document.querySelector(".signe__in--div");
const signInForm = document.querySelector(".log-in-form");
const closeBtn = document.querySelector(".close--signInDiv-btn");

signInBtn.addEventListener("click", function () {
  signInDiv.classList.add("active-log-in");
});

signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

document.addEventListener("click", function (body) {
  const isSignInForm = body.target.matches("[is-sign-in]");
  if (!isSignInForm) {
    signInDiv.classList.remove("active-log-in");
    signInForm.reset();
  }
});

closeBtn.addEventListener("click", function () {
  signInDiv.classList.remove("active-log-in");
  signInForm.reset();
});

// ! registration sign up
const signUpBtn = document.getElementById("signe__up");
const signUpDiv = document.querySelector(".signe__up--div");
const signUpForm = document.querySelector(".signe__up-form");
const closeSignUpDiv = document.querySelector(".close--signUpDiv-btn");

signUpBtn.addEventListener("click", function () {
  signUpDiv.classList.add("active-sign-up");
});

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

document.addEventListener("click", function (body) {
  const isSignUpForm = body.target.matches("[sign-up-form]");
  if (!isSignUpForm) {
    signUpDiv.classList.remove("active-sign-up");
    signUpForm.reset();
  }
});

closeSignUpDiv.addEventListener("click", function () {
  signUpDiv.classList.remove("active-sign-up");
  signUpForm.reset();
});

// ! info from server

async function serverInfo() {
  try {
    const response = await fetch(
      "https://alexander-mirotadze.github.io/server/server.json"
    );
    const JSdata = await response.json();
    const result = await JSdata.forEach((element) => {
      mainFnc(element);
    });
    return result;
  } catch (error) {
    console.log("Page Not Found");
  }
}
serverInfo();

// ! ---
const beersContainerDiv = document.getElementById("beer-container-div");
const beerInfoContainer = document.querySelector(".beer-info");
const newBeerSlide = document.querySelector(".splide__slide");

function mainFnc(eachBeerItem) {
  beerDescriptionFnc(eachBeerItem);
  beerImageFnc(eachBeerItem);
  shopAllProductsFnc(eachBeerItem);
}

// ! ---
function beerDescriptionFnc(beerItem) {
  let beerDetailInfo = document.createElement("div");
  beerDetailInfo.classList.add("beer-details");
  beerDetailInfo.setAttribute("data-beerDesc", beerItem.id);

  let beerName = document.createElement("h2");
  beerName.innerText = beerItem.name;
  beerName.classList.add("h2-beer-name");

  let beerTag = document.createElement("p");
  beerTag.innerText = beerItem.tagline;
  beerTag.classList.add("p-beer-tagline");

  let beerDescription = document.createElement("p");
  beerDescription.innerText = beerItem.description;
  beerDescription.classList.add("p-beer-description");

  let beerPP = document.createElement("div");
  beerPP.classList.add("beer-pp-div");
  let beerPrice = document.createElement("span");
  beerPrice.classList.add("beer-price");
  beerPrice.textContent = `${beerItem.price}${" - GEL"}`;
  let beerPcLine = document.createElement("input");
  beerPcLine.classList.add("beer-pc");
  let beerPCText = document.createElement("span");
  beerPCText.classList.add("beer-PC-text");
  beerPCText.textContent = "PC";
  let addToBuyIcon = document.createElement("i");
  addToBuyIcon.classList.add(
    "fa-solid",
    "fa-cart-plus",
    "fa-2xl",
    "add-product-icon"
  );

  beerDetailInfo.appendChild(beerName);
  beerDetailInfo.appendChild(beerTag);
  beerDetailInfo.appendChild(beerDescription);
  beerPP.appendChild(beerPrice);
  beerPP.appendChild(beerPcLine);
  beerPP.appendChild(beerPCText);
  beerPP.appendChild(addToBuyIcon);
  beerDetailInfo.appendChild(beerPP);
  beerInfoContainer.appendChild(beerDetailInfo);
}

// ! ---

const newBeerAllSlides = document.querySelectorAll(".splide__slide");

function beerImageFnc(beerItem) {
  let imgBeerElements = document.createElement("img");
  imgBeerElements.setAttribute("src", beerItem.image_url);
  imgBeerElements.setAttribute("alt", `${"beer-"}${beerItem.id}`);
  imgBeerElements.setAttribute("data-id-img", beerItem.id);
  imgBeerElements.classList.add("beer-image");

  newBeerAllSlides.forEach(function (elementSlide) {
    let slideElementNum = elementSlide.getAttribute("data-id");
    let imgBeerNum = imgBeerElements.getAttribute("data-id-img");

    if (slideElementNum == imgBeerNum) {
      elementSlide.appendChild(imgBeerElements);
    }
  });
}

// ! slider npm

var splide = new Splide(".splide", {
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

//  ! shop all products
const shopAllProducts = document.querySelector(".shop");

function shopAllProductsFnc (beerItem) {
  let beerDetailInfo = document.createElement("div");
  beerDetailInfo.classList.add("shop-beer-details");

  let beerName = document.createElement("h2");
  beerName.innerText = beerItem.name;
  beerName.classList.add("h2-beer-name");

  let imgBeerElements = document.createElement("img");
  imgBeerElements.setAttribute("src", beerItem.image_url);
  imgBeerElements.setAttribute("alt", `${"beer-"}${beerItem.id}`);
  imgBeerElements.classList.add("shop-beer-image");


  let beerTag = document.createElement("p");
  beerTag.innerText = beerItem.tagline;
  beerTag.classList.add("p-beer-tagline");

  let beerDescription = document.createElement("span");
  beerDescription.innerText = beerItem.description;
  beerDescription.classList.add("shop-span-beer-description");
  let beerDescDrop = document.createElement("i");
  beerDescDrop.classList.add("fa-solid","fa-sort-down","fa-lg","desc-accord-icon");

  let beerPP = document.createElement("div");
  beerPP.classList.add("beer-pp-div");
  let beerPrice = document.createElement("span");
  beerPrice.classList.add("beer-price");
  beerPrice.textContent = `${beerItem.price}${" - GEL"}`;
  let beerPcLine = document.createElement("input");
  beerPcLine.classList.add("beer-pc");
  let beerPCText = document.createElement("span");
  beerPCText.classList.add("beer-PC-text");
  beerPCText.textContent = "PC";
  let addToBuyIcon = document.createElement("i");
  addToBuyIcon.classList.add(
    "fa-solid",
    "fa-cart-plus",
    "fa-2xl",
    "add-product-icon"
  );

  beerDetailInfo.appendChild(beerName);
  beerDetailInfo.appendChild(imgBeerElements);
  beerDetailInfo.appendChild(beerTag);
  beerDescription.appendChild(beerDescDrop);
  beerDetailInfo.appendChild(beerDescription);
  beerPP.appendChild(beerPrice);
  beerPP.appendChild(beerPcLine);
  beerPP.appendChild(beerPCText);
  beerPP.appendChild(addToBuyIcon);
  beerDetailInfo.appendChild(beerPP);

  shopAllProducts.appendChild(beerDetailInfo)
}

// ! burger
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

// ! scroll up
function scrollUp() {
  const scrollUpIcon = document.querySelector(".fa-circle-up");

  scrollUpIcon.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
scrollUp();
