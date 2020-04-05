import {
  getInputValues,
  DOMstrings,
  addListItemToDOM,
  clearInputFields,
} from "./UIController.js";
import { addItem } from "./budgetController.js";

// GLOBAL APP CONTROLLER

const updateBudget = () => {};

//
const ctrlAddItem = () => {
  //   console.log("ctrlAddItem");

  // 1. Get the field input data
  const inputData = getInputValues();
  console.log(inputData);

  if (
    inputData.description !== "" &&
    !isNaN(inputData.value) &&
    inputData.value > 0
  ) {
    // 2. Add the item to the budget controller
    const newItem = addItem(
      inputData.type,
      inputData.description,
      inputData.value
    );
    //console.log(newItem);
    // 3. Add the item to the UI
    addListItemToDOM(newItem, inputData.type);
    // 4. clear input fields
    clearInputFields();
    // 5. Calculate and update budget
    updateBudget();
  }
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
