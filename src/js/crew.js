import { animateContent, handleChange } from "./setup.js";

const content = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const $buttons = document.querySelectorAll(".crew-btn");
const $crewContent = document.querySelector(".crew-details");

const $crewName = document.querySelector(".crew-title");
const $crewRole = document.querySelector(".crew-subtitle");
const $crewDescription = document.querySelector(".crew-description");
const $crewImage = document.querySelector(".crew-img-container img");

let btnActive = document.querySelector(".crew-btn.active");

function updateContent(button, index) {
  animateContent($crewContent, $crewImage);
  btnActive = handleChange(button, btnActive);

  $crewName.textContent = content[index].name;
  $crewRole.textContent = content[index].role;
  $crewDescription.textContent = content[index].bio;

  $crewImage.src = `../../public/assets/crew/image-crew-${index}.avif`;
}

$buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    updateContent(button, index);
  });
});
