"use strict";
/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  const closeMenu = document.querySelector("#nav-close");

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.add("show-menu");

      // We remove the show-menu class to the div tag with the nav__menu class
      closeMenu.addEventListener("click", () => {
        nav.classList.remove("show-menu");
        console.log("clicked");
      });
    });
  }
};
showMenu("nav-toggle", "nav-menu");



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));



// POPUP EFFECT //
const body = document.querySelector(".body");
let teamPreview = document.querySelector(".preview");
let teamPreviewBox = document.querySelectorAll(".preview__body");

document.querySelectorAll(".team__group .team__item").forEach((team__item) => {
  team__item.addEventListener("click", function () {
    teamPreview.style.display = "flex";
    let name = team__item.getAttribute("data-name");
    teamPreviewBox.forEach((team__preview) => {
      let target = team__preview.getAttribute("data-target");
      if (name == target) {
        team__preview.classList.add("active");
      } else {
        team__preview.classList.remove("active");
      }
    });
    if (!teamPreview.classList.contains("preview__body.active")) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  });
});
teamPreview.addEventListener("click", () => {
  // closeModal.classList.remove("active");
  teamPreview.style.display = "none";
  body.style.overflow = "auto";
});
teamPreviewBox.forEach((closeModal) => {
  closeModal.querySelector(".btn-close").onclick = () => {
    closeModal.classList.remove("active");
    teamPreview.style.display = "none";
        body.style.overflow = "auto";
  };
});



