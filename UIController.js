// created DOM strings so when we change some class in HTML we need to change it only in here
export const DOMstrings = {
  inputType: ".add__type",
  inputDescription: ".add__description",
  inputValue: ".add__value",
  inputEnterValue: ".add__btn",
  incomeListItemContainer: ".income__list",
  expenseListItemContainer: ".expenses__list",
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
          <div class="item clearfix" id="income-${object.id}">
            <div class="item__description">${object.description}</div>
            <div class="right clearfix">
              <div class="item__value">${object.value}</div>
                <div class="item__delete">
                  <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
          </div>
          `;
  }
  // create HTML structure for expense cards and set container for cards to be .expense__list
  else if (type == "exp") {
    incomeExpenseContainer = DOMstrings.expenseListItemContainer;
    html = `
          <div class="item clearfix" id="expense-${object.id}">
            <div class="item__description">${object.description}</div>
            <div class="right clearfix">
              <div class="item__value">${object.value}</div>
              <div class="item__percentage">21%</div>
              <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
              </div>
            </div>
          </div>
           `;
  }
  //console.log(incomeExpenseContainer);
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
