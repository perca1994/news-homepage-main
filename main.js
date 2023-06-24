document.addEventListener("DOMContentLoaded", () => {
  const menuHamb = document.querySelector("#menu-hamb");
  const menuNav = document.querySelector(".menu-nav");
  const body = document.querySelector("body");
  const navContainer = document.querySelector(".nav-container");

  menuHamb.addEventListener("click", () => {
    if (menuNav.classList.contains("inactive")) {
      menuNav.classList.add("active");
      menuNav.classList.remove("inactive");
      navContainer.classList.add("nav-container-active");
      menuHamb.classList.add("menu-close");
      body.classList.add("no-scroll");
    } else {
      menuNav.classList.remove("active");
      menuNav.classList.add("inactive");
      navContainer.classList.remove("nav-container-active");
      menuHamb.classList.remove("menu-close");
      body.classList.remove("no-scroll");
    }
  });
});
