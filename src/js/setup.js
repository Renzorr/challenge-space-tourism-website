export function animateContent(contentContainer, imageElement) {
  gsap.fromTo(
    contentContainer,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, ease: "power4.inOut" }
  );

  gsap.fromTo(imageElement, { scale: 0 }, { scale: 1, ease: "power3.out" });
}

export function handleChange(button, btnActive) {
  if (btnActive) {
    btnActive.classList.remove("active");
  }

  button.classList.add("active");

  return button;
}
