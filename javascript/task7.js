//Task 7

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

let nationality = prompt('Whats your nationality?')
let n = nationality.toUpperCase()
let gender = prompt('What is your gender? (male/female)')
let g = gender.toUpperCase()
let age = +prompt('how old are you?')
if (n == 'PAKISTANI') {
    if (g == 'MALE') {
        if (age > 18) {
            alert('Eligible to vote')
        }
        else {
            alert('Not eligible to vote')
        }
    }
    else if (g == 'FEMALE') {
        if (age > 18) {
            let m = prompt('are you married? (Y/N)')
            if (m == 'Y' || m == 'y') {
                alert('Eligible to vote')
            }
            else if (m == 'N' || m == 'n') {
                alert('Not eligible to vote')
            }

        }
    }
    else {
        alert('Error!')
    }

}
else {
    alert('Not eligible to vote')
}
