import { getInput, DOMstrings } from "./UIController.js";

const DOM = DOMstrings;
console.log(DOM);

// GLOBAL APP CONTROLLER

const ctrlAddItem = () => {
  //   console.log("ctrlAddItem");

  // 1. Get the field input data
  const inputData = getInput();
  console.log(inputData);
  // 2. Add the item to the budget controller
  // 3. Add the item to the UI
  // 4. Calculate the budget
};

document
  .querySelector(DOM.inputEnterValue)
  .addEventListener("click", ctrlAddItem);

document.addEventListener("keypress", (event) => {
  if (event.keyCode == 13 || event.which == 13) {
    ctrlAddItem();
  }
});
