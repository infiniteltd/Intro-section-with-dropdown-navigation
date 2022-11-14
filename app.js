const navOpen = document.querySelector("#icon-menu");
const navClose = document.querySelector("#icon-close-menu");
const navBar = document.querySelector(".nav-bar");
const listItem = document.querySelectorAll(".cl-nav-ul-li-item");
const feturesItem = document.querySelectorAll(".cl-ul-features");

// navbar for mobile viewport

navOpen.addEventListener("click", () => {
  navBar.classList.add("display");
});

navClose.addEventListener("click", () => {
  navBar.classList.remove("display");
});

// navbar for mobile viewport

listItem.forEach((e) => {
  e.addEventListener("click", function () {
    this.querySelector(".arrow-up").classList.toggle("arrow-rotate");
    this.nextElementSibling.classList.toggle("display");
  });
});

//function for remove the open nav-list

const removeFunction = (classOfItem, removingClass) => {
  const anItemToCheck = document.getElementsByClassName(classOfItem);

  Object.keys(anItemToCheck).forEach(function (items) {
    if (anItemToCheck[items].classList.contains(removingClass)) {
      anItemToCheck[items].classList.remove(removingClass);
    }
  });
};


window.addEventListener("click", (e) => {
  if (!e.target.matches(".cl-nav-ul-li-item")) {
    removeFunction("cl-ul-features", "display");
    removeFunction("arrow-up", "arrow-rotate");
  }
});