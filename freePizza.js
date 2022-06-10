/*

In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

Customers in the dictionary are represented as:

{ 'customerName' : [list_of_order_values_as_integers] }
*/

function pizzaRewards(customers, minOrders, minPrice) {
  const result = [];
  for(let customer in customers){
    const priceCount = customers[customer].filter(order => order >= minPrice);
    if(priceCount.length >= minOrders){
      result.push(customer);
    }
  }
  return result;
}