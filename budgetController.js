// Expense function constructor
export class Expense {
  constructor(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
}
// Income function constructor
class Income {
  constructor(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }
}
// data that contains income and expense object and total income and expense
export const data = {
  allItems: {
    exp: [],
    inc: [],
  },
  totals: {
    exp: 0,
    inc: 0,
  },
  totalBudget: 0,
  percentage: -1,
};
// function that creates new expense or income object
export const addItem = (type, des, val) => {
  let newItem, ID;

  ID = 0;
  // [1,2,3,4,5], nextID = 6
  // [1,2,4,5,8], nextID = 9
  // ID = last ID + 1

  // gets the last element of data.allItems and gets id ( malo me buni !!!)--> (mislim da me ne buni vise al pitati Kris)
  if (data.allItems[type].length == 0) {
    ID = 0;
  } else {
    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
  }

  // creates new Item based on the type ( inc/exp )
  if (type == "inc") {
    newItem = new Income(ID, des, val);
  } else if (type == "exp") {
    newItem = new Expense(ID, des, val);
  }
  // push the income/expense object to the data.allItems exp/inc
  data.allItems[type].push(newItem);
  return newItem;
};
// calculate total income or expense
const calculateTotal = (type) => {
  let sum = 0;

  data.allItems[type].forEach((current) => {
    sum += current.value;
  });

  data.totals[type] = sum;
};

export const calculateBudget = () => {
  // 1. calculate total income and expenses
  calculateTotal("inc");
  calculateTotal("exp");
  // 2. Calculate the budget: income - expenses
  data.totalBudget = data.totals["inc"] - data.totals["exp"];
  // 3. calculate the percentage of income that we spent
  if (data.totals.inc > 0) {
    data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
  }
};

export const getBudgetData = () => {
  return {
    totalBudget: data.totalBudget,
    totalInc: data.totals.inc,
    totalExp: data.totals.exp,
    percentage: data.percentage,
  };
};

// handler responsable for delete item from data.allItems['inc' or 'exp']
export const deleteIncomeExpenseBudgetItemHandler = (type, id) => {
  //delete the item using the splice method
  //data.allItems[type].splice(id, 1);

  //delete the item using the filter method
  // const newData = data.allItems[type].filter((item) => item.id !== id);

  // delete item using map, indexOf, and splice method together
  // loop through data.allItems["inc"/""] and return new array with the all ids
  const ids = data.allItems[type].map((item) => item.id);
  //console.log("ids", ids);
  // find the index of the element from ids array with the id of the selected element
  const indexOf = ids.indexOf(id);
  //console.log("indexOf", indexOf);

  // if the element exists, delete it from the data.allItems[type] using splice() method
  if (indexOf !== -1) {
    data.allItems[type].splice(indexOf, 1);
  }
};
