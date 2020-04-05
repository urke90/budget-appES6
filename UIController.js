// created DOM strings so when we change some class in HTML we need to change it only in here
export const DOMstrings = {
  inputType: ".add__type",
  inputDescription: ".add__description",
  inputValue: ".add__value",
  inputEnterValue: ".add__btn",
};

// gets inupt values for type( expense, income ), description, and amount
export const getInput = () => {
  // select the input elements and get the value
  const type = document.querySelector(DOMstrings.inputType).value;
  const description = document.querySelector(DOMstrings.inputDescription).value;
  const value = document.querySelector(DOMstrings.inputValue).value;

  return {
    type,
    description,
    value,
  };
};
