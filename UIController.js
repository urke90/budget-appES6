// created DOM strings so when we change some class in HTML we need to change it only in here
export const DOMstrings = {
  inputType: ".add__type",
  inputDescription: ".add__description",
  inputValue: ".add__value",
  inputEnterValue: ".add__btn",
  incomeListItemContainer: ".income__list",
  expenseListItemContainer: ".expenses__list",
  totalBudgetLabel: ".budget__value",
  totalIncomeLabel: ".budget__income--value",
  totalExpenseLabel: ".budget__expenses--value",
  totalPercentageLabel: ".budget__expenses--percentage",
  container: ".container",
};

// gets inupt values for type( expense, income ), description, and amount
export const getInputValues = () => {
  // select the input elements and get the value
  const type = document.querySelector(DOMstrings.inputType).value;
  const description = document.querySelector(DOMstrings.inputDescription).value;
  const value = parseFloat(document.querySelector(DOMstrings.inputValue).value);

  return {
    type,
    description,
    value,
  };
};

export const addListItemToDOM = (object, type) => {
  let html, incomeExpenseContainer;

  // create HTML structure for income cards and set container for cards to be .income__list
  if (type == "inc") {
    incomeExpenseContainer = DOMstrings.incomeListItemContainer;
    html = `
          <div class="item clearfix" id="inc-${object.id}">
            <div class="item__description">${object.description}</div>
            <div class="right clearfix">
              <div class="item__value">${object.value}</div>
                <div class="item__delete">
                  <button class="item__delete--btn"><i class="ion-ios-close-outline inc-${object.id}"></i></button>
                </div>
            </div>
          </div>
          `;
  }
  // create HTML structure for expense cards and set container for cards to be .expense__list
  else if (type == "exp") {
    incomeExpenseContainer = DOMstrings.expenseListItemContainer;
    html = `
          <div class="item clearfix"id="exp-${object.id}">
            <div class="item__description">${object.description}</div>
            <div class="right clearfix">
              <div class="item__value">${object.value}</div>
              <div class="item__percentage">21%</div>
              <div class="item__delete">
                <button  class="item__delete--btn"><i class="ion-ios-close-outline exp-${object.id}"></i></button>
              </div>
            </div>
          </div>
           `;
  }
  document.querySelector(incomeExpenseContainer).innerHTML += html;
};
// clearing input fields when income/expense item is added
export const clearInputFields = () => {
  // select all input fields, loop through them, and clear value after income/expense item is added
  const inputs = document.querySelectorAll(
    `${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`
  );
  inputs.forEach((inputField) => {
    inputField.value = "";
  });
  inputs[0].focus();
};
// display budget to the UI
export const displayBudget = (dataObj) => {
  document.querySelector(DOMstrings.totalBudgetLabel).textContent =
    dataObj.totalBudget;
  document.querySelector(DOMstrings.totalIncomeLabel).textContent =
    dataObj.totalInc;
  document.querySelector(DOMstrings.totalExpenseLabel).textContent =
    dataObj.totalExp;

  if (dataObj.percentage > 0) {
    document.querySelector(
      DOMstrings.totalPercentageLabel
    ).textContent = `${dataObj.percentage}%`;
  } else {
    document.querySelector(DOMstrings.totalPercentageLabel).textContent = "---";
  }
};

// delete the exp inc item from the UI
export const deleteIncomeExpenseUIItemHandler = (id) => {
  const element = document.querySelector(`#${id}`);
  element.parentNode.removeChild(element);
};
