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
