export function SignInFnc() {
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
}
