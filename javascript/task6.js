//Task 6

// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.



let arr = ['product1', 'product2', 'product3','product4'];
let n = prompt(`Please enter the position of the product you want to remove  (1-4) :`);
let i = parseInt(n) - 1;
let remove = arr.splice(i, 1)[0];
console.log(`Removed item: ${remove}`);
console.log(`Remaining items: ${arr}`);
console.log(`Total items remaining: ${arr.length}`);