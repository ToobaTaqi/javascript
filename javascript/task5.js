//Task 5


// creating two empty arrays called "contactNumbers" and "contactNames"
let contactNumbers = []
let contactNames = []
let iterate = +prompt(`How may times you wanna iterate the loop?`)

// Using the prompt, you will ask the user to enter a contact number and contact name.
for (i = 1; i <= iterate; i++) {
    //You will then push these values into their respective arrays using the push method
    let number = +prompt(`Enter contact number`)
    contactNumbers.push(number)
    let name = prompt(`Enter contact name`)
    contactNames.push(name)
}
//After adding all the contacts, you will display the contact numbers and names in the console. To do this, you will need to use a for loop to iterate through both arrays and log each element to the console.
for (let a = 0; a < contactNumbers.length; a++) {
    console.log("Contact Name:");
    console.log(contactNames[a]);
    console.log("Contact Number:");
    console.log(contactNumbers[a]);
}

