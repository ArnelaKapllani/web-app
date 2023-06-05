import { Bookmark } from "../Components/Bookmark/Bookmark.js";

console.clear();

const answerButton = document.querySelector('[data-js="button-show-answer"]');
const answer = document.querySelector('[data-js="hidden-answer"]');

answerButton.addEventListener("click", function (buttonText) {
  buttonText.target.classList.toggle("changeButtonText");
  answer.classList.toggle("hidden");
});
