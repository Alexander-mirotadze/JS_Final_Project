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
const beersContainerDiv = document.getElementById("beer-container-div");



async function serverInfo() {
  try {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const JSdata = await response.json();
    const result = await JSdata.forEach(element => {
      mainFnc (element)
    });
    return result;
  } catch (error) {
    console.log("Page Not Found");
  }
}
serverInfo();


function mainFnc (beerItem) {
  let eachBeerDiv = document.createElement("div");
  eachBeerDiv.classList.add("each-beer-div");

  const h2BeerElements = document.createElement("h2");
  h2BeerElements.innerText = beerItem.name;
  h2BeerElements.classList.add("h2-beer-name");
  
  const imgDivElements = document.createElement("div");
  imgDivElements.setAttribute("class", "div-for-beer-img");

  const imgBeerElements = document.createElement("img");
  imgBeerElements.setAttribute("src", beerItem.image_url);
  imgBeerElements.setAttribute("alt", `${"beer-"}${beerItem.id}`);
  imgBeerElements.classList.add("beer-image")


  imgDivElements.appendChild(imgBeerElements);
  eachBeerDiv.appendChild(h2BeerElements);
  eachBeerDiv.appendChild(imgDivElements);
  beersContainerDiv.appendChild(eachBeerDiv);
}
// ! burger
const burgerBar = document.querySelector(".burger__bar");
const navLists = document.querySelector(".nav");

burgerBar.addEventListener("click", function(){
  navLists.classList.toggle("active-nav");
})

// ! scroll up
function scrollUp () {
  const scrollUpIcon = document.querySelector(".fa-circle-up");

  scrollUpIcon.addEventListener("click", function () {
    window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
     });
  });
}
scrollUp ();