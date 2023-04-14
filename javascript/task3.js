// Create a program that -- Then, .
// If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


// generate a random number between 1 and 10 and stores it in a variable called "secretNumber"
let secretNumber=6

// ask the user to enter a guess for the secret number using a prompt
let guess=prompt(`guess the secret number`)

// Use an if-else statement to check if the user's guess matches the secret number.
if(guess<6){
    alert(`Error! Your entered number is less than the secret number`)
}
else if(guess>6){
    alert(`Error! Your entered number is greater than the secret number`)
}
else{
    alert(`Congratulations! you got it`)
}