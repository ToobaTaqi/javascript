//Task 1 : calculating zakat value

// Make a variable named zakat percentage and store a value of 2.5% (hint: 2.5% means 0.025)
let zakatPercentage = 0.025;

// Make one more variable named as user input and take the input from the user using the prompt & Make sure the input value should be of type number
var userInput = +prompt("Please enter your income:");

// Check if userInput is a valid number
if (isNaN(userInput)) {
  alert("Invalid input! Please enter a valid number.");
} else {
  // Make a variable named as a result and assign it the value that should be the multiple of the zakat percentage and user input
  let result = zakatPercentage * userInput;

  // At the last alert, this result shows a message like "your zakat value is xxx"
  alert(`Your zakat value is ${result} pkr`);
}

