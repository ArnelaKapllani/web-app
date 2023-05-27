console.clear();

const field = document.querySelector('[data-js="formField"]');
const charactersLeft = document.querySelector(
  '[data-js="amountOfCharactersLeft]'
);
const maxLength = field.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  charactersLeft.innerHTML = value;
};
updateAmountLeft(maxLength);

field.addEventListener("input", () => {
  updateAmountLeft(maxlength - field.value.length);
});
