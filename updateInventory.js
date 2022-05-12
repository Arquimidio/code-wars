/*
You will be given an array which lists the current inventory of stock in your store and another array which lists the new inventory being delivered to your store today.

Your task is to write a function that returns the updated list of your current inventory in alphabetical order.

Example
currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]

updateInventory(currentStock, newStock)  ==>
[[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'], [43, 'Sony']]
*/

function updateInventory(curStock, newStock) {
  newStock.forEach(item => {
    const [quant, name] = item;
    const inCurStock = curStock.find(curItem => curItem[1] === name);
    if(inCurStock){
      inCurStock[0] += quant;
    }else{
      curStock.push(item);
    }
  })
  return curStock.sort((a, b) => a[1].localeCompare(b[1]));
}