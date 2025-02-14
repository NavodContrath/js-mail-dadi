/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/*SUMMARY
- math random for user and computer numbers
- log the FIXED numbers 
- IF to check who won (larger number wins)
*/

//- math random for user and computer numbers
const userNumber = Math.ceil(Math.random() * 6)
const computerNumber = Math.ceil(Math.random() * 6)
//- log the FIXED numbers 
console.log(`Player number is ${userNumber} and Computer number is ${computerNumber}`);
//- IF to check who won (larger number wins)
if (userNumber > computerNumber) {
    console.log("user wins!");
} else if (userNumber < computerNumber) {
    console.log("computer wins!");
} else {
    console.log("draw");
}