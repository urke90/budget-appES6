export const getInput = () => {
  // select the input elements and get the value
  let type = document.querySelector(".add__type").value;
  let desription = document.querySelector(".add__description").value;
  let value = document.querySelector(".add__value").value;

  return {
    type,
    desription,
    value,
  };
  //   return {
  //     type: document.querySelector(".add__type").value,
  //     desription: document.querySelector(".add__description").value,
  //     value: document.querySelector(".add__value").value,
  //   };
};
