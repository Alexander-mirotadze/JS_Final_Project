"use strict";
// ! dropProductList
import { navDropDownFnc } from "./navDropDown.js";
navDropDownFnc();
// ! search
import { searchFnc } from "./search.js";
searchFnc();
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

// ? --- slider beer Image Fnc ვერაფრით ავამუშავე ის ლოგიკა რომ სლაიდერის სურათზე არსებული პროდუქტის აღწერა ჩამესვა გვერდით Div-ში
// const beerInfoContainer = document.querySelector(".beer-info");
// const activeSlide = document.querySelector("[aria-hidden]");
// console.log(activeSlide);
const newBeerAllSlides = document.querySelectorAll(".splide__slide");
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
import { allSlidersFnc } from "./sliders.js";
allSlidersFnc();

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

const beerQtyload = document.createElement("span");
const beerQtySumload = document.createElement("span");

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
      beerQtyload.textContent =`${beerQtyInput}`;
      beerQtyload.setAttribute("cart-div", element.id);
      element.input_qty = beerQtyInput;
      // ---
      let beerItemSum = beerQtyInput * Number(element.price);
      beerQtySumload.textContent = `${beerItemSum}`;
      beerQtySumload.setAttribute("cart-div", element.id);
      element.qty_sum = beerItemSum;
      // ---
      function sumProducts(...totalPrice) {
        let totalBeerPrice = 0;
        for (let item of totalPrice) {
          // console.log(item);
          totalBeerPrice += item;
        }
        return totalBeerPrice;
      }
      let resultTotalPrice = sumProducts(Number(element.input_qty) * Number(element.price));
      element.total_price = resultTotalPrice;

      createCartLifnc(element);

      beerPcLine.value = "";
    }

    loocalStorageFnc(element);
    // ---
    function totalPriceForDom (){
      const cartLoad = JSON.parse(localStorage.getItem("cartLiLocStorage"));
      if (cartLoad) {
        cartLoad.forEach((element) => {});
        const calculTotalLoadSum = cartLoad.reduce(function (totalSumLoad,sumLoad) {
          return totalSumLoad + sumLoad.total_price;
        },0);
        const resulTotalLoadSum = calculTotalLoadSum;
        totalBeerPriceBox.textContent = resulTotalLoadSum;
      }
    }
    totalPriceForDom ();
  });

  beerPP.appendChild(beerPrice);
  beerQty.appendChild(beerPcLine);
  beerQty.appendChild(beerPCText);
  submiQtyBtn.appendChild(addToBuyIcon);
  beerQty.appendChild(submiQtyBtn);
  beerPP.appendChild(beerQty);

  return beerPP;
}

// ! cart li Fnc
function createCartLifnc(element) {
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
  cartLiQty.textContent = `${element.input_qty} ${"PC"}`;
  cartLiQty.setAttribute("cart-div", element.id);
  let cartTotalPrice = document.createElement("div");
  cartTotalPrice.textContent = `${"total"} ${element.qty_sum} ${"GEL"}`;
  cartTotalPrice.setAttribute("cart-div", element.id);
  let deletecartLi = document.createElement("i");
  deletecartLi.classList.add(
    "fa-solid",
    "fa-trash-can",
    "fa-lg",
    "delete-cart-li"
  );
  deletecartLi.setAttribute("cart-div", element.id);
  deletecartLi.addEventListener("click", function () {
    // const cartLoad = JSON.parse(localStorage.getItem("cartLiLocStorage"));
    // if (cartLoad) {
    //   cartLoad.forEach((element) => {
    //     if (element.id == deletecartLi.getAttribute("cart-div")) {
    //       let indexItemStorage = cartLoad.indexOf(element);
    //       console.log(indexItemStorage);
    //       // cartLoad.splice(indexItemStorage,1)
    //       localStorage.removeItem();
    //       // localStorage.removeItem(element[indexItemStorage]);
    //     }
    //   });
    // }
    cartLi.remove();
    // loocalStorageFnc(cartLoad);
  });

  cartLi.appendChild(cartLiPic);
  cartLi.appendChild(cartLiName);
  cartLi.appendChild(cartLiPrice);
  cartLi.appendChild(cartLiQty);
  cartLi.appendChild(cartTotalPrice);
  cartLi.appendChild(deletecartLi);
  cartUl.appendChild(cartLi);
}

// //! loocal Storage Fnc
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
    const calculTotalLoadSum = cartLoad.reduce(function (totalSumLoad,sumLoad) {
      return totalSumLoad + sumLoad.total_price;
    },0);
    const resulTotalLoadSum = calculTotalLoadSum;
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