console.clear();

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", function onClick(event) {
  bookmarkButton.classList.toggle("color");
});

const answerButton = document.querySelector('[data-js="button-show-answer"]');
const answer = document.querySelector('[data-js="hidden-answer"]');

answerButton.addEventListener("click", function (buttonText) {
  buttonText.target.classList.toggle("changeButtonText");
  answer.classList.toggle("hidden");
});
