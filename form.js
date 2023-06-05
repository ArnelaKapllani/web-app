console.clear();

const form = document.querySelector('[data-js="form"]');
const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const charactersLeft = document.querySelector(
  '[data-js="amountOfCharactersLeft"]'
);
const maxLength = yourQuestion.getAttribute("maxlength");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newData = new FormData(event.target);
  const data = Object.fromEntries(newData);

  console.log(data);
});

const updateAmountLeft = (value) => {
  charactersLeft.innerHTML = value;
};
updateAmountLeft(maxLength);

yourQuestion.addEventListener("input", () => {
  updateAmountLeft(maxLength - yourQuestion.value.length);
});

function quizApp(data) {
  const section = document.createElement("section");
  section.classList.add("question-card");

  const button = document.createElement("button");
  button.classList.add("bookmark-button");
  button.setAttribute("type", "button", "data-js", "bookmark-button");

  const heading = document.createElement("h2");
  heading.classList.add("question-card__question");
  heading.textContent = yourQuestion.value;

  const buttonSubmit = document.createElement("button");
  button.classList.add("question-card__button");
  button.setAttribute("type", "button");
  const unorderList = document.createElement("ul");
  const link1 = document.createElement("li");
  const text = document.createElement("p");

  document.body.append(section);
  section.append(button);
  section.append(heading);
  section.append(buttonSubmit);
  section.append(unorderList);
  unorderList.append(link1);
  section.append(text);
}
