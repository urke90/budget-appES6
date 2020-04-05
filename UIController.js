export const DOMstrings = {
  inputType: ".add__type",
  inputDescription: ".add__description",
  inputValue: ".add__value",
  inputEnterValue: ".add__btn",
};

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
  //   return {
  //     type: document.querySelector(".add__type").value,
  //     desription: document.querySelector(".add__description").value,
  //     value: document.querySelector(".add__value").value,
  //   };
};
