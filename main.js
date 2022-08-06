import "./style.css";
import VanillaTilt from "vanilla-tilt";
import Toast from "./libs/toastr/Toastr.js";
import { TiltConfig } from "./constants/tilt-config.js";
import Counter from "./libs/counter-animation/counter.js";

/**
 * Get Elements
 */
const toggleElem = document.querySelector("#toggle");
const sidebarElem = document.querySelector("#sidebar");
const pageBodyElem = document.querySelector("#pageBody");
const cardElems = pageBodyElem.querySelectorAll(".card-grid>.card");
const numberElems = pageBodyElem.querySelectorAll(
  ".card>.card-information>.number"
);
const loaderElem = document.querySelector("#loader");
const buttonElems = pageBodyElem.querySelectorAll("button");
const introAudio = new Audio("./assets/sounds/intro.mp3");

/**
 * Build Out Functions
 */
function menuToggle() {
  sidebarElem.classList.toggle("active");
  pageBodyElem.classList.toggle("active");
}

function closeLoaderElem(duration) {
  setTimeout(() => {
    loaderElem.style.display = "none";
  }, duration);
}

function showToast() {
  new Toast({
    autoClose: 10000,
    text: this.id,
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    canClose: true,
    status: this.id,
  });
  introAudio.currentTime = 0;
  introAudio.play();
}

/**
 * Hook Up The Event Listeners
 */
toggleElem.addEventListener("click", menuToggle);
buttonElems.forEach((button) => {
  button.addEventListener("click", showToast);
});

/**
 * Counter Init Function
 */
Counter.init(numberElems, 10);

/**
 * VanillaTilt Init Function
 */
VanillaTilt.init(cardElems, TiltConfig);

/**
 * Loader Element Showing Duration
 */
closeLoaderElem(4000);
