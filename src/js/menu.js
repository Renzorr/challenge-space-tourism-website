const $mobileMenu = document.querySelector(".navbar-mobile");
const $openMenu = document.querySelector(".open-menu");
const $closeMenu = document.querySelector(".close-menu");

$openMenu.addEventListener("click", () => {
  $mobileMenu.classList.add("active");
});

$closeMenu.addEventListener("click", () => {
  $mobileMenu.classList.remove("active");
});
