"use strict";
// ! dropProductList
import { navDropDownFnc } from "./navDropDown.js";
navDropDownFnc();

// ! search
const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("search__input");
const listOfShopProducts = [];

searchIcon.addEventListener("click", function () {
  searchForm.classList.toggle("active__search");
  searchInput.value = "";
});

document.addEventListener("click", (body) => {
  const isSearchBar = body.target.matches("[data-search-bar]");
  // console.log(isRegAutauDiv);
  if (!isSearchBar) {
    searchForm.classList.remove("active__search");
    searchInput.value = "";
  }
});

// ! user
import { userBtnFnc } from "./userBtn.js";
userBtnFnc();
// ! registration sign in
import { SignInFnc } from "./signIn.js";
SignInFnc();
// ! registration sign up
import { signUpFnc } from "./signUp.js";
signUpFnc();

// ! cart
const cartIcon = document.getElementById("cartIcon");
const cartDivActive = document.querySelector(".cart-div");
const cartUl = document.querySelector(".cart-ul");
const cartCloseBtn = document.querySelector(".close--prodact-list-btn");
const totalBeerPriceBox = document.querySelector(".total-pay-number");
const clearAllBtn = document.querySelector(".clear-all");

cartIcon.addEventListener("click", function () {
  cartDivActive.classList.toggle("active-cart");
});

document.addEventListener("click", (body) => {
  const isCartDiv = body.target.matches("[data-cart-div]");
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
  totalBeerPriceBox.innerText = "";
  localStorage.clear();
});

// ! info from server
async function serverInfo() {
  try {
    const response = await fetch(
      "https://alexander-mirotadze.github.io/server/server.json"
    );
    const JSdata = await response.json();
    JSdata.forEach((element) => {
      beerImageFncForSlidersFnc(element);
      beerDetailInfoFnc(element);
    });
  } catch (error) {
    console.log("Page Not Found");
  }
}
serverInfo();

// ! beer Image and descr Fnc for sliders
const beerInfoContainer = document.querySelectorAll(".beer-info");
const newBeerAllSlides = document.querySelectorAll(".splide__slide");

function beerImageFncForSlidersFnc(element) {
  let imgBeerElements = document.createElement("img");
  imgBeerElements.setAttribute("src", element.image_url);
  imgBeerElements.setAttribute("alt", `${"beer-"}${element.id}`);
  imgBeerElements.setAttribute("data-id-img", element.id);
  imgBeerElements.classList.add("beer-image");

  let beerDescrForSlider = document.createElement("div");
  beerDescrForSlider.setAttribute("data-id-descr", element.id);
  beerDescrForSlider.classList.add("slider-descr-info");

  let beerDetailInfo = document.createElement("li");
  beerDetailInfo.classList.add("shop-beer-details");
  beerDetailInfo.setAttribute("data-description", element.id);

  let beerName = document.createElement("h2");
  beerName.innerText = element.name;
  beerName.classList.add("h2-beer-name");

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

  let resultBeerPP = beerPPFnc(element);
  beerDescrForSlider.appendChild(beerName);
  beerDescrForSlider.appendChild(beerTag);
  beerDescription.appendChild(beerDescDrop);
  beerDescrForSlider.appendChild(beerDescription);
  beerDescrForSlider.appendChild(resultBeerPP);
  // console.log(imgBeerElements);

  beerInfoContainer.forEach((element) => {
    let beerInfoNum = element.getAttribute("data-id-description");
    let descriptionNum = beerDescrForSlider.getAttribute("data-id-descr");

    if (beerInfoNum == descriptionNum) {
      element.appendChild(beerDescrForSlider);
    }
  });

  newBeerAllSlides.forEach(function (elementSlide) {
    let slideElementNum = elementSlide.getAttribute("data-id");
    let imgBeerNum = imgBeerElements.getAttribute("data-id-img");

    if (slideElementNum == imgBeerNum) {
      elementSlide.appendChild(imgBeerElements);
    }
  });
}

// ! sliders logic
import { allSlidersFnc } from "./sliders.js";
allSlidersFnc();

// ! shop all products
const shopAllProducts = document.querySelector(".shop");

// ! beer Detail Info Fnc for shop
function beerDetailInfoFnc(element) {
  let beerDetailInfo = document.createElement("li");
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

  // # search
  listOfShopProducts.push(beerDetailInfo);

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
// ! search Fnc
function searchFnc(searchInputValue) {
  let filterdlists = listOfShopProducts.filter((element) =>
    element.firstElementChild.textContent
      .toLowerCase()
      .includes(searchInputValue.toLowerCase().trim())
  );
  console.log(filterdlists);
  shopAllProducts.innerHTML = "";
  filterdlists.forEach((filteredLi) => {
    shopAllProducts.appendChild(filteredLi);
  });
}
searchInput.addEventListener("keyup", function () {
  searchFnc(this.value);
});

const beerQtyload = document.createElement("span");
const beerQtySumload = document.createElement("span");

// ! total Price For Dom
function totalPriceForDom() {
  const cartLocStorageArray =
    JSON.parse(localStorage.getItem("cartLiLocStorage")) || [];
  if (cartLocStorageArray) {
    const calculTotalLoadSum = cartLocStorageArray.reduce(function (
      totalSumLoad,
      sumLoad
    ) {
      return totalSumLoad + sumLoad.total_price;
    },
    0);
    const resulTotalLoadSum = Number(calculTotalLoadSum.toFixed(2));
    totalBeerPriceBox.textContent = resulTotalLoadSum;
  }
  localStorage.setItem(
    "cartLiLocStorage",
    JSON.stringify([...cartLocStorageArray])
  );
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
      // ---
      let beerQtyInput = Number(beerPcLine.value);
      beerQtyload.textContent = `${beerQtyInput}`;
      beerQtyload.setAttribute("data-cart-div", element.id);
      element.input_qty = beerQtyInput;
      // ---
      let beerItemSum = beerQtyInput * Number(element.price);
      beerQtySumload.textContent = `${beerItemSum}`;
      beerQtySumload.setAttribute("data-cart-div", element.id);
      element.qty_sum = Number(beerItemSum.toFixed(2));
      // ---
      function sumProducts(...totalPrice) {
        let totalBeerPrice = 0;
        for (let item of totalPrice) {
          // console.log(item);
          totalBeerPrice += item;
        }
        return totalBeerPrice;
      }
      let resultTotalPrice = sumProducts(
        Number(element.input_qty) * Number(element.price)
      );
      element.total_price = resultTotalPrice;

      createCartLifnc(element);

      beerPcLine.value = "";
    }

    loocalStorageFnc(element);
    // ---
    totalPriceForDom();
  });

  beerPP.appendChild(beerPrice);
  beerQty.appendChild(beerPcLine);
  beerQty.appendChild(beerPCText);
  submiQtyBtn.appendChild(addToBuyIcon);
  beerQty.appendChild(submiQtyBtn);
  beerPP.appendChild(beerQty);

  return beerPP;
}

// const cartLiArray = []; //? ერთი და იგივე აითემი რომ ორჯერ არ დაამატოს ლისთში და მხოლოდ რაოდენობა შეკრიბოს მაგის ლოგიკა ვერ მოვასწარი და თან გამიჭირდა

// ! cart li Fnc
function createCartLifnc(element) {
  let cartLi = document.createElement("li");
  cartLi.classList.add("cart-li");
  cartLi.setAttribute("data-cart-div", element.id);
  let cartLiPic = document.createElement("img");
  cartLiPic.setAttribute("src", element.image_url);
  cartLiPic.classList.add("cart-li-pic");
  cartLiPic.setAttribute("data-cart-div", element.id);
  let cartLiName = document.createElement("div");
  cartLiName.textContent = element.name;
  cartLiName.setAttribute("data-cart-div", element.id);
  let cartLiPrice = document.createElement("div");
  cartLiPrice.textContent = `${element.price} ${"GEL"}`;
  cartLiPrice.setAttribute("data-cart-div", element.id);
  let cartLiQty = document.createElement("div");
  cartLiQty.textContent = `${element.input_qty} ${"PC"}`;
  cartLiQty.setAttribute("data-cart-div", element.id);
  let cartTotalPrice = document.createElement("div");
  cartTotalPrice.textContent = `${"total"} ${element.qty_sum} ${"GEL"}`;
  cartTotalPrice.setAttribute("data-cart-div", element.id);
  let deletecartLi = document.createElement("i");
  deletecartLi.classList.add(
    "fa-solid",
    "fa-trash-can",
    "fa-lg",
    "delete-cart-li"
  );
  deletecartLi.setAttribute("data-cart-div", element.id);
  deletecartLi.addEventListener("click", function () {
    const cartLocStorageArray =
      JSON.parse(localStorage.getItem("cartLiLocStorage")) || [];
    if (cartLocStorageArray) {
      cartLocStorageArray.forEach((element) => {
        if (element.id == deletecartLi.getAttribute("data-cart-div")) {
          let indexItemStorage = cartLocStorageArray.indexOf(element);
          cartLocStorageArray.splice(indexItemStorage, 1);
        }
      });
    }
    localStorage.setItem(
      "cartLiLocStorage",
      JSON.stringify([...cartLocStorageArray])
    );
    cartLi.remove();
    totalPriceForDom();
  });

  cartLi.appendChild(cartLiPic);
  cartLi.appendChild(cartLiName);
  cartLi.appendChild(cartLiPrice);
  cartLi.appendChild(cartLiQty);
  cartLi.appendChild(cartTotalPrice);
  cartLi.appendChild(deletecartLi);
  //? ერთი და იგივე აითემი რომ ორჯერ არ დაამატოს ლისთში და მხოლოდ რაოდენობა შეკრიბოს მაგის ლოგიკა ვერ მოვასწარი და თან გამიჭირდა(თუ გამოვიდოდა, მგავე ლოგიკას გამოვიყენებდი ყველა ელემენტის კალათის თავზე რომ შეყვანილი რაოდენობა ჩავარდნილიყო რამე Div ელემენტში რომელსაც შევუქმნიდი)
  // cartLiArray.push(element.id);
  // console.log(cartLiArray);
  // cartLiArray.forEach((element) => {
  //   // console.log(element);
  //   for( let x of element){
  //     if (x == x){
  //       console.log("true");
  //     }
  //     else{
  //       console.log("false");
  //     }
  //   }
  // })

  cartUl.appendChild(cartLi);
}

// //! create Storage Fnc
function loocalStorageFnc(storageCartli) {
  const cartLocStorageArray =
    JSON.parse(localStorage.getItem("cartLiLocStorage")) || [];
  localStorage.setItem(
    "cartLiLocStorage",
    JSON.stringify([...cartLocStorageArray, storageCartli])
  );
}

// //! load local storage fnc
function loadLocalStorageFnc() {
  const cartLoad = JSON.parse(localStorage.getItem("cartLiLocStorage"));
  if (cartLoad) {
    cartLoad.forEach((element) => {
      createCartLifnc(element);
    });
    const calculTotalLoadSum = cartLoad.reduce(function (
      totalSumLoad,
      sumLoad
    ) {
      return totalSumLoad + sumLoad.total_price;
    },
    0);
    const resulTotalLoadSum = Number(calculTotalLoadSum.toFixed(2));
    totalBeerPriceBox.textContent = resulTotalLoadSum;
  }
}
document.addEventListener("DOMContentLoaded", loadLocalStorageFnc());

// ! burger on export -import
import { burgerBarFnc } from "./burgerBar.js";
burgerBarFnc();

// ! scroll up on export -import
import { scrollUp } from "./scrollup.js";
scrollUp();
