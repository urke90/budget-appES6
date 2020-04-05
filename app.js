import { getInput, DOMstrings, addListItemToDOM } from "./UIController.js";
import { addItem } from "./budgetController.js";
// GLOBAL APP CONTROLLER

//
const ctrlAddItem = () => {
  //   console.log("ctrlAddItem");

  // 1. Get the field input data
  const inputData = getInput();
  // console.log(inputData);
  // 2. Add the item to the budget controller
  const newItem = addItem(
    inputData.type,
    inputData.description,
    inputData.value
  );
  //console.log(newItem);
  // 3. Add the item to the UI
  addListItemToDOM(newItem, inputData.type);
  // 4. Calculate the budget
};

const setupEventListeners = () => {
  const DOM = DOMstrings;
  document
    .querySelector(DOM.inputEnterValue)
    .addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", (event) => {
    if (event.keyCode == 13 || event.which == 13) {
      ctrlAddItem();
    }
  });
};

export const init = () => {
  setupEventListeners();
  console.log("app started");
};
