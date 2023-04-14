//Task 4 : Create a program that asks the user to enter a name, and then prints out the name with the first letter capitalized (Make your name in capitalized case).

let name = prompt(`Enter Your Good Name`)

let FirstLetter = name.slice(0,1)
let cap = FirstLetter.toUpperCase()
let restOfName = name.slice(1)
alert(`string with capitallized first letter is : ` + cap + restOfName)