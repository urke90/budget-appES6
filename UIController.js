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
  expensePercentageLabel: ".item__percentage",
  dateLabel: ".budget__title--month",
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
// Adds expense/income item to the DOM
export const addListItemToDOM = (object, type) => {
  let html, incomeExpenseContainer;

  // create HTML structure for income cards and set container for cards to be .income__list
  if (type == "inc") {
    incomeExpenseContainer = DOMstrings.incomeListItemContainer;
    html = `
          <div class="item clearfix" id="inc-${object.id}">
            <div class="item__description">${object.description}</div>
            <div class="right clearfix">
              <div class="item__value">${formatIncExpValue(object.value)}</div>
                <div class="item__delete">
                  <button class="item__delete--btn">
                    <i data-type="inc" data-id="${
                      object.id
                    }" class="ion-ios-close-outline inc-${object.id}"></i>
                  </button>
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
              <div class="item__value">${formatIncExpValue(object.value)}</div>
              <div class="item__percentage">21%</div>
              <div class="item__delete">
                <button  class="item__delete--btn">
                  <i data-type="exp" data-id="${
                    object.id
                  }" class="ion-ios-close-outline exp-${object.id}"></i>
                </button>
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
  let type;
  dataObj.totalBudget > 0 ? (type = "inc") : (type = "exp");

  document.querySelector(
    DOMstrings.totalBudgetLabel
  ).textContent = formatIncExpValue(dataObj.totalBudget, type);
  document.querySelector(
    DOMstrings.totalIncomeLabel
  ).textContent = formatIncExpValue(dataObj.totalInc, "inc");
  document.querySelector(
    DOMstrings.totalExpenseLabel
  ).textContent = formatIncExpValue(dataObj.totalExp, "exp");

  if (dataObj.percentage > 0) {
    document.querySelector(
      DOMstrings.totalPercentageLabel
    ).textContent = `${dataObj.percentage}%`;
  } else {
    document.querySelector(DOMstrings.totalPercentageLabel).textContent = "---";
  }
};

// delete the exp inc item from the UI
export const deleteIncomeExpenseUIItemHandler = (type, id) => {
  // select wrapper div for individualt income or expense item and remove it from the DOM
  const itemWrapper = document.querySelector(`#${type}-${id}`);
  itemWrapper.parentNode.removeChild(itemWrapper);
};

export const displayPercentagesUI = (percentages) => {
  // select all perecentages divs
  const expItemPercentage = document.querySelectorAll(
    DOMstrings.expensePercentageLabel
  );
  // loop through node list and asigne value for each individual percentage
  expItemPercentage.forEach((curEl, index) => {
    if (percentages[index] > 0) {
      curEl.textContent = `${percentages[index]}%`;
    } else {
      curEl.textContent = `---`;
    }
  });
};
// format income expense values
const formatIncExpValue = (num, type) => {
  /*
  + or - before number
  exactly 2 decimal points
  comma separating the thousends

  2310.5467 => 2,310.46
  2000 => + 2,000.00
  */
  // convert value to absolute and add .xx ( 2 decimals )
  num = Math.abs(num).toFixed(2);
  // split the value on intiger part and decimal part
  let numSplite = num.split(".");

  let intPart = numSplite[0];

  if (intPart.length > 3) {
    intPart = `${intPart.substr(0, intPart.length - 3)},${intPart.substr(
      intPart.length - 3,
      3
    )}`; // input 2310, output 2,310
  }

  let decPart = numSplite[1];

  //return `${type} ${int},${decPart}`;

  return `${type === "exp" ? "-" : "+"} ${intPart}.${decPart}`;
};
// diplay accurate date on the UI
export const displayAccurateDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[now.getMonth()];
  document.querySelector(DOMstrings.dateLabel).innerHTML = `${month} ${year}`;
};

export const typeColorHandler = () => {
  const inputs = document.querySelectorAll(
    `${DOMstrings.inputType},${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`
  );
  inputs.forEach((input) => {
    input.classList.toggle("red-focus");
  });
  document.querySelector(DOMstrings.inputEnterValue).classList.toggle("red");
};
