"use strict";

export function navDropDownFnc() {
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
}
