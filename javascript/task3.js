// Task 3 : guessing the secret number

// generate a random number between 1 and 10 and stores it in a variable called "secretNumber"
let secretNumber=6

// ask the user to enter a guess for the secret number using a prompt
let guess=prompt(`guess the secret number`)

// Use an if-else statement to check if the user's guess matches the secret number.
if(guess<6){
    alert(`Your entered number is less than the secret number. Please guess again`)
}
else if(guess>6){
    alert(`Your entered number is greater than the secret number. Please guess again`)
}
else{
    alert(`Congratulations! You guessed the secret number`)
}