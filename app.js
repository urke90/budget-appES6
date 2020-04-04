import { getInput } from "./UIController.js";

// GLOBAL APP CONTROLLER

const ctrlAddItem = () => {
  //   console.log("ctrlAddItem");
  let data = getInput();
  console.log(data);
  // 1. Get the field input data
  // 2. Add the item to the budget controller
  // 3. Add the item to the UI
  // 4. Calculate the budget
};

document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

document.addEventListener("keypress", (event) => {
  if (event.keyCode == 13 || event.which == 13) {
    ctrlAddItem();
  }
});
