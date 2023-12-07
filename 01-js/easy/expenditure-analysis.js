/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {}; //Initialized an empty object to store the total spending for each category.
  //Key -> Category Value -> total spending

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const { category, price } = transaction;
    /* 
    If it exists, add the price of the current transaction to the existing total.
If it doesn't exist, create a new entry with the category and the price of the current transaction.
    */
    if (categoryTotal.hasOwnProperty(category)) {
      categoryTotal[category] += price;
    } else {
      categoryTotal[category] = price;
    }
  }

  const result = Object.keys(categoryTotal).map((category) => ({
    category: category,
    totalSpent: categoryTotal[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
  