// Task 2 : calculate the fitrah amount

// ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers"

let familyMembers = prompt("Enter the number of your family members ")

// Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.

let wheat = 250
let oat = 450
let dates = 2100
let raisins = 2800
let fitraAmount
let method = prompt("Choose a fitra method: 1-wheat, 2-oat, 3-dates, 4-raisins", "1/2/3/4")

// use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.

if (method == 1) {
    // fitraAmount = familyMembers * wheat
    alert(`you have to pay fitra ${familyMembers*wheat} in pkr`)
}
else if (method == 2) {
    alert(`you have to pay fitra ${familyMembers*oat} in pkr`)
}
else if (method == 3) {
    alert(`you have to pay fitra ${familyMembers*dates} in pkr`)
}
else if(method == 4){
    alert(`you have to pay fitra ${familyMembers*raisins} in pkr`)
}
else {
    alert(`Error! Try again`) 
}
