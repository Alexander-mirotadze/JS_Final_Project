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

// ! cart
const cartIcon = document.getElementById("cartIcon");
const cartDivActive = document.querySelector(".cart-div");
const cartUl = document.querySelector(".cart-ul");
const cartCloseBtn = document.querySelector(".close--prodact-list-btn");
const clearAllBtn = document.querySelector(".clear-all");

cartIcon.addEventListener("click", function () {
  cartDivActive.classList.toggle("active-cart");
});

document.addEventListener("click", (body) => {
  const isCartDiv = body.target.matches("[cart-div]");
  // console.log(isCartDiv);
  if (!isCartDiv) {
    cartDivActive.classList.remove("active-cart");
  }
});

cartCloseBtn.addEventListener("click", function () {
  cartDivActive.classList.remove("active-cart");
});
clearAllBtn.addEventListener("click", function () {
  cartUl.innerHTML = "";
  localStorage.clear();
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

// ! ---main Fnc
function mainFnc(eachBeerItem) {
  beerImageFncForSlidersFnc(eachBeerItem);
  beerDetailInfoFnc(eachBeerItem);
}

// ! --- slider beer Image Fnc
const beerInfoContainer = document.querySelector(".beer-info");
const newBeerAllSlides = document.querySelectorAll(".splide__slide");
// const activeSlide = document.querySelector("[aria-hidden]");
// console.log(activeSlide);

function beerImageFncForSlidersFnc(element) {
  let imgBeerElements = document.createElement("img");
  imgBeerElements.setAttribute("src", element.image_url);
  imgBeerElements.setAttribute("alt", `${"beer-"}${element.id}`);
  imgBeerElements.setAttribute("data-id-img", element.id);
  imgBeerElements.classList.add("beer-image");

  // console.log(imgBeerElements);

  newBeerAllSlides.forEach(function (elementSlide) {
    let slideElementNum = elementSlide.getAttribute("data-id");
    let imgBeerNum = imgBeerElements.getAttribute("data-id-img");

    if (slideElementNum == imgBeerNum) {
      elementSlide.appendChild(imgBeerElements);
    }
  });
}
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

//  ! shop all products
const shopAllProducts = document.querySelector(".shop");

// ! beer Detail Info Fnc for shop
function beerDetailInfoFnc(element) {
  let beerDetailInfo = document.createElement("div");
  beerDetailInfo.classList.add("shop-beer-details");
  beerDetailInfo.setAttribute("data-description", element.id);

  let beerName = document.createElement("h2");
  beerName.innerText = element.name;
  beerName.classList.add("h2-beer-name");

  let imgBeerElements = document.createElement("img");
  imgBeerElements.setAttribute("src", element.image_url);
  imgBeerElements.setAttribute("alt", `${"beer-"}${element.id}`);
  imgBeerElements.classList.add("shop-beer-image");

  let beerTag = document.createElement("p");
  beerTag.innerText = element.tagline;
  beerTag.classList.add("p-beer-tagline");

  let beerDescription = document.createElement("p");
  beerDescription.innerText = element.description;
  beerDescription.classList.add("shop-span-beer-description");
  let beerDescDrop = document.createElement("i");
  beerDescDrop.classList.add(
    "fa-solid",
    "fa-sort-down",
    "fa-lg",
    "desc-accord-icon"
  );
  beerDescDrop.addEventListener("click", function (e) {
    beerDescription.classList.toggle("up-down");
    let descritptionActive = document.querySelector(".up-down");
    if (descritptionActive) {
      beerDescDrop.classList.remove("fa-sort-down");
      beerDescDrop.classList.add("fa-sort-up");
    } else {
      beerDescDrop.classList.remove("fa-sort-up");
      beerDescDrop.classList.add("fa-sort-down");
    }
  });

  //# --- PP
  let resultBeerPP = beerPPFnc(element);
  // console.log(resultBeerPP);

  beerDetailInfo.appendChild(beerName);
  beerDetailInfo.appendChild(imgBeerElements);
  beerDetailInfo.appendChild(beerTag);
  beerDescription.appendChild(beerDescDrop);
  beerDetailInfo.appendChild(beerDescription);
  beerDetailInfo.appendChild(resultBeerPP);
  shopAllProducts.appendChild(beerDetailInfo);

}

// let totalBeerPriceBox = document.querySelector(".total-pay-number");
// let totalBeerPrice = 0;

//! create cart li fnc
function createCartLifnc(element, itemQty) {
  let cartLi = document.createElement("li");
  cartLi.classList.add("cart-li");
  cartLi.setAttribute("cart-div", element.id);
  let cartLiPic = document.createElement("img");
  cartLiPic.setAttribute("src", element.image_url);
  cartLiPic.classList.add("cart-li-pic");
  cartLiPic.setAttribute("cart-div", element.id);
  let cartLiName = document.createElement("div");
  cartLiName.textContent = element.name;
  cartLiName.setAttribute("cart-div", element.id);
  let cartLiPrice = document.createElement("div");
  cartLiPrice.textContent = `${element.price} ${"GEL"}`;
  cartLiPrice.setAttribute("cart-div", element.id);
  let cartLiQty = document.createElement("div");
  cartLiQty.textContent = `${itemQty.value} ${"PC"}`;
  cartLiQty.setAttribute("cart-div", element.id);
  let cartItemSumPrice = document.createElement("div");
  cartItemSumPrice.textContent = `${
    Number(element.price) * Number(itemQty.value)
  } ${"GEL"}`;
  cartItemSumPrice.setAttribute("cart-div", element.id);
  let deletecartLi = document.createElement("i");
  deletecartLi.classList.add(
    "fa-solid",
    "fa-trash-can",
    "fa-lg",
    "delete-cart-li"
  );
  deletecartLi.setAttribute("cart-div", element.id);
  deletecartLi.addEventListener("click", function () {
    cartLi.remove();
  });

  cartLi.appendChild(cartLiPic);
  cartLi.appendChild(cartLiName);
  cartLi.appendChild(cartLiPrice);
  cartLi.appendChild(cartLiPrice);
  cartLi.appendChild(cartLiQty);
  cartLi.appendChild(cartItemSumPrice);
  cartLi.appendChild(deletecartLi);
  cartUl.appendChild(cartLi);
}

//! beer pp Fnc
function beerPPFnc(element) {
  let beerPP = document.createElement("div");
  beerPP.classList.add("beer-pp-div");

  let beerPrice = document.createElement("span");
  beerPrice.classList.add("beer-price");
  beerPrice.textContent = `${element.price}${" - GEL"}`;

  let beerQty = document.createElement("form");
  beerQty.classList.add("beer-qty-form");

  let beerPcLine = document.createElement("input");
  beerPcLine.classList.add("beer-pc");
  beerPcLine.setAttribute("type", "Number");
  beerPcLine.setAttribute("min", "1");

  let beerPCText = document.createElement("span");
  beerPCText.classList.add("beer-PC-text");
  beerPCText.textContent = "PC";

  let submiQtyBtn = document.createElement("button");
  submiQtyBtn.classList.add("beer-qty-submit");

  let addToBuyIcon = document.createElement("i");
  addToBuyIcon.classList.add(
    "fa-solid",
    "fa-cart-plus",
    "fa-2xl",
    "add-product-icon"
  );

  //# --- cart li
  beerQty.addEventListener("submit", function (e) {
    e.preventDefault();
    if (Number(beerPcLine.value) <= 0) {
      return alert("Wrong Quantity");
    } else {
      createCartLifnc(element, beerPcLine);
      // loocalStorageFnc(element);
    }
    this[0].textContent = "";
  });

  beerPP.appendChild(beerPrice);
  beerQty.appendChild(beerPcLine);
  beerQty.appendChild(beerPCText);
  submiQtyBtn.appendChild(addToBuyIcon);
  beerQty.appendChild(submiQtyBtn);
  beerPP.appendChild(beerQty);

  return beerPP;
}

// //! loocal Storage Fnc
// function loocalStorageFnc(storageCartli) {
//   const cartLocStorageArray =
//     JSON.parse(localStorage.getItem("cartLiLocStorage")) || [];
//   localStorage.setItem("cartLiLocStorage", JSON.stringify([...cartLocStorageArray, storageCartli]));
// }

// //! load local storage fnc
// function loadLocalStorageFnc() {
//   const cartLoad = JSON.parse(localStorage.getItem("cartLiLocStorage"));
//   if (cartLoad) {
//     cartLoad.forEach((element) => {
//       createCartLifnc(element);
//     });
//   }
// }
// document.addEventListener("DOMContentLoaded", loadLocalStorageFnc());

// ! burger
// import {burgerBarFnc} from "./burgerBar";
const burgerBar = document.querySelector(".burger__bar");
const navLists = document.querySelector(".nav");
// burgerBarFnc();
function burgerBarFnc() {
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
burgerBarFnc();

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
