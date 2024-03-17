export function signUpFnc() {
  const signUpBtn = document.getElementById("signe__up");
  const signUpDiv = document.querySelector(".signe__up--div");
  const signUpForm = document.querySelector(".signe__up-form");
  const showPassword = document.getElementById("password");
  const showRepPassword = document.getElementById("repeatPassword");
  const showIcon = document.getElementById("showPass1");
  const showIconRep = document.getElementById("showPass2");
  const closeSignUpDiv = document.querySelector(".close--signUpDiv-btn");

  signUpBtn.addEventListener("click", function () {
    signUpDiv.classList.add("active-sign-up");
  });

  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const errors = {};

    let firstNameValue = document.getElementById("firstName").value;
    if (firstNameValue == "") {
      errors.firstName = "Please enter you name";
    }

    let lastNameValue = document.getElementById("lastName").value;
    if (lastNameValue == "") {
      errors.lastName = "Please enter you lastname";
    }

    if (password.value == "") {
      errors.passw1 = "Please enter you password";
    }

    if (repPass.value == "") {
      errors.passw2 = "Please repeat your password";
    }

    if (password.value != repPass.value) {
      errors.passw2 = "Password is not match";
      repPassLine.style.border = "2px solid red";
    } else {
      repPassLine.style.border = "2px solid green";
    }

    if (email.value == "") {
      errors.email = "Please enter your Email";
    }

    let radio = false;
    formElement.querySelectorAll('[name="radio"]').forEach((gendreItems) => {
      if (gendreItems.checked) {
        radio = true;
      }
    });
    if (radio != true) {
      errors.radio = "Please check you gender";
    }
    let checkBox = document.getElementById("checkBox").checked;
    if (checkBox != true) {
      errors.checkbox = "You need to agree terms";
    }

    formElement
      .querySelectorAll(".error-text")
      .forEach((formChildeElements) => {
        formChildeElements.textContent = "";
      });

    for (let errorsKeys in errors) {
      let errorsPelements = document.getElementById("error-" + errorsKeys);
      // console.log(errorsPelements);
      if (errorsPelements) {
        errorsPelements.textContent = errors[errorsKeys];
      }
    }

    if (Object.keys(errors).length == 0) {
      formElement.submit();
    }
  });

  function ShowHidePassword() {
    if (showPassword.type == "password") {
      showPassword.setAttribute("type", "text");
      showIcon.classList.remove("fa-eye");
      showIcon.classList.add("fa-eye-slash");
    } else {
      showPassword.setAttribute("type", "password");
      showIcon.classList.add("fa-eye");
      showIcon.classList.remove("fa-eye-slash");
    }
  }
  showIcon.addEventListener("click", ShowHidePassword);

  showIconRep.addEventListener("click", function () {
    if (showRepPassword.type == "password") {
      showRepPassword.setAttribute("type", "text");
      showIconRep.classList.remove("fa-eye");
      showIconRep.classList.add("fa-eye-slash");
    } else {
      showRepPassword.setAttribute("type", "password");
      showIconRep.classList.add("fa-eye");
      showIconRep.classList.remove("fa-eye-slash");
    }
  });

  // --- email keyup
  const email = document.getElementById("Email");

  function emailValidation() {
    let emailValue = email.value;
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailPelement = document.getElementById("error-email");

    if (emailValue.match(emailRegex)) {
      emailPelement.textContent = "Email is Valid";
      emailPelement.style.color = "green";
      email.style.border = "2px solid green";
    } else {
      emailPelement.textContent = "Email Not Valid";
      emailPelement.style.color = "red";
      email.style.border = "2px solid red";
    }

    if (emailValue == "") {
      emailPelement.innerHTML = "";
      email.style.border = "1px solid #bdbdbd";
    }
  }
  email.addEventListener("keyup", emailValidation);

  // ---pass keyup
  const password = document.getElementById("password");
  const passwordLine = document.getElementById("password");

  function passwordChecker() {
    let passwordValue = document.getElementById("password").value;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let passwordPElement = document.getElementById("error-passw1");

    let repPassworPElement = document.getElementById("error-passw2");

    if (!passwordValue.match(passwordRegex)) {
      passwordPElement.textContent = "6-20 symbol {A-z & Number(s)}";
      passwordLine.style.border = "2px solid red";
    } else {
      passwordPElement.textContent = "";
      passwordLine.style.border = "2px solid green";
    }

    if (password.value != repPass.value) {
      repPassLine.style.border = "2px solid red";
      repPassworPElement.textContent = "Password is not match";
    } else {
      repPassLine.style.border = "2px solid green";
      repPassworPElement.textContent = "";
    }

    if (passwordValue == "") {
      passwordPElement.textContent = "";
      passwordLine.style.border = "1px solid #bdbdbd";
    }
  }
  password.addEventListener("keyup", passwordChecker);

  // --- rep pass keyup

  const repPass = document.getElementById("repeatPassword");
  const repPassLine = document.getElementById("repeatPassword");

  function perPasswordChecker() {
    let repPassValue = repPass.value;
    let repPassworPElement = document.getElementById("error-passw2");

    if (repPassValue != password.value) {
      repPassworPElement.textContent = "Password is not match";
      repPassLine.style.border = "2px solid red";
    } else {
      repPassworPElement.textContent = "";
      repPassLine.style.border = "2px solid green";
    }

    if (repPassValue == "") {
      repPassworPElement.textContent = "";
      repPassLine.style.border = "1px solid #bdbdbd";
    }
  }
  repPass.addEventListener("keyup", perPasswordChecker);

  // ---
  document.addEventListener("click", function (body) {
    const isSignUpForm = body.target.matches("[data-sign-up-form]");
    if (!isSignUpForm) {
      signUpDiv.classList.remove("active-sign-up");
      signUpForm.reset();
    }
  });

  closeSignUpDiv.addEventListener("click", function () {
    signUpDiv.classList.remove("active-sign-up");
    signUpForm.reset();
  });
}
