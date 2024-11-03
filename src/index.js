import { pageLoad } from "./alt";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";

const content = document.querySelector("div#content");

pageLoad();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", function() {
    content.innerText = "";
    pageLoad();
});

menuButton.addEventListener("click", function() {
    content.innerText = "";
    menuLoad();
});

aboutButton.addEventListener("click", function() {
    content.innerText = "";
    aboutLoad();
});