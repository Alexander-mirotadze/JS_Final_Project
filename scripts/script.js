"use strict";
// ! search
const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
searchIcon.addEventListener("click", function (){
    searchForm.classList.toggle("active__search")
});
// ! user
const userRegAutauthoriz = document.getElementById("userRegAutauthoriz");
const regAutaudiv = document.querySelector(".reg__autau__btn__div");
userRegAutauthoriz.addEventListener("click", function () {
    regAutaudiv.classList.toggle("active-reg-btns");
});
// ! registration sign in
const signInBtn = document.getElementById("signe__in");
const signInDiv = document.querySelector(".signe__in--div");
const closeBtn = document.querySelector(".close--signInDiv-btn");

signInBtn.addEventListener("click", function (){
    signInDiv.classList.add("active-log-in");
});

signInDiv.addEventListener("submit", function (e) {
    e.preventDefault();
})

closeBtn.addEventListener("click", function () {
    signInDiv.classList.remove("active-log-in");
});

// ! registration sign up
const signUpBtn = document.getElementById("signe__up");
const signUpDiv = document.querySelector(".signe__up--div");
const closeSignUpDiv = document.querySelector(".close--signUpDiv-btn");

signUpBtn.addEventListener("click", function () {
    signUpDiv.classList.add("active-sign-up");
});

closeSignUpDiv.addEventListener("click", function () {
    signUpDiv.classList.remove("active-sign-up");
});