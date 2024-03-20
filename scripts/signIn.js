"use strict";

export function SignInFnc() {
  const signInBtn = document.getElementById("signe__in");
  const signInDiv = document.querySelector(".signe__in--div");
  const signInForm = document.querySelector(".log-in-form");
  const logInEmailLine = document.getElementById("log-in-email");
  const logInPasswordLine = document.getElementById("log-in-pass");
  const errorPLine = document.querySelectorAll(".error-log-in-text");
  const closeBtn = document.querySelector(".close--signInDiv-btn");

  signInBtn.addEventListener("click", function () {
    signInDiv.classList.add("active-log-in");
  });

  document.addEventListener("click", function (body) {
    const isSignInForm = body.target.matches("[data-is-sign-in]");
    if (!isSignInForm) {
      signInDiv.classList.remove("active-log-in");
      signInForm.reset();
    }
  });

  closeBtn.addEventListener("click", function () {
    signInDiv.classList.remove("active-log-in");
    signInForm.reset();
  });

  signInForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const errors = {};

    // email
    let logInEmailValue = logInEmailLine.value;
    // console.log(logInEmailValue);
    if (logInEmailValue == "") {
      errors.log_in_email = "Email is not entered";
    }

    let logInPasswordValue = logInPasswordLine.value;
    // console.log(logInPasswordValue);
    if (logInPasswordValue == "") {
      errors.log_in_pass = "Password is not entered";
    }

    // console.log(errors);

    errorPLine.forEach((pelement) => {
      pelement.textContent = "";
    });

    for (let eachError in errors) {
      // console.log(eachEroro);
      let errorsPElement = document.getElementById("error-" + eachError);
      // console.log(errorsPElement);
      if (errorsPElement) {
        errorsPElement.innerText = errors[eachError];
      }
    }

    if (Object.keys(errors).length == 0) {
      signInForm.submit();
    }
  });
}
