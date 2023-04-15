//Task 8

// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

let WorldCupSquad=['player1','player2','player3','player4','player5','player6','player7','player8','player9','player10','player11','player12','player13','player14','player15']
let copy=WorldCupSquad
let finalTeam=WorldCupSquad.slice(0,11)
alert('copy of array: '+copy+' Final Team: '+finalTeam)