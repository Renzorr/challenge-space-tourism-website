import { animateContent, handleChange } from "./setup.js";

const content = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const $buttons = document.querySelectorAll(".technology-btn");
const $techContent = document.querySelector(".technology-details");

const $techName = document.querySelector(".technology-title");
const $techDescription = document.querySelector(".technology-description");
const $techImage = document.querySelector(".technology-img-container img");
const $techSrcset = document.querySelector("picture source");

let btnActive = document.querySelector(".active");

function updateContent(button, index) {
  animateContent($techContent, $techImage);
  btnActive = handleChange(button, btnActive);

  $techName.textContent = content[index].name;
  $techDescription.textContent = content[index].description;
  $techImage.src = `/public/assets/technology/image-${index}-portrait.webp`;
  $techSrcset.srcset = `/public/assets/technology/image-${index}-landscape.webp`;
}

$buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    updateContent(button, index);
  });
});
