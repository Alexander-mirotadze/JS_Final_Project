export function userBtnFnc() {
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
}
