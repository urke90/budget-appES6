import {
  getInputValues,
  DOMstrings,
  addListItemToDOM,
  clearInputFields,
  displayBudget,
  deleteIncomeExpenseUIItemHandler,
} from "./UIController.js";
import {
  addItem,
  calculateBudget,
  getBudgetData,
  deleteIncomeExpenseBudgetItemHandler,
  data,
} from "./budgetController.js";

// GLOBAL APP CONTROLLER

const updateBudget = () => {
  // 1. Calculate Budget
  calculateBudget();
  // 2. Return the budget
  const budgetData = getBudgetData();
  //console.log(budgetData);
  // 3. Display the budget on UI
  displayBudget(budgetData);
  console.log(data);
};

// get input values check them create new income/expense, send the data to UIcontroller clear fields, updateBudget
const ctrlAddItemHandler = () => {
  // 1. Get the field input data
  const inputData = getInputValues();

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

// setup handler for deleteting Item
const ctrlDeleteItemHandler = (event) => {
  console.log(event);
  if (
    event.target.className.includes("inc") ||
    event.target.className.includes("exp")
  ) {
    const selectedElement = event.target.classList[1];
    console.log(selectedElement);
    const selectedElementSplited = event.target.className
      .split(" ")[1]
      .split("-");
    const type = selectedElementSplited[0];
    const id = parseInt(selectedElementSplited[1]);

    // 1. delete the item fom budget controller
    deleteIncomeExpenseBudgetItemHandler(type, id);
    // 2. delete the item from UI controller
    deleteIncomeExpenseUIItemHandler(selectedElement);
    // 3. Update and show the new budget
    updateBudget();
  }
};

// setup keypress and click listeners for adding and delteting items
document
  .querySelector(DOMstrings.inputEnterValue)
  .addEventListener("click", ctrlAddItemHandler);

document.addEventListener("keypress", (event) => {
  if (event.keyCode == 13 || event.which == 13) {
    ctrlAddItemHandler();
  }
});

document
  .querySelector(DOMstrings.container)
  .addEventListener("click", ctrlDeleteItemHandler);

// init function, reset budget
export const init = () => {
  displayBudget({
    totalBudget: 0,
    totalInc: 0,
    totalExp: 0,
    percentage: "---",
  });
  console.log("app started");
};
