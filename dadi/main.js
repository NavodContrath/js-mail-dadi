/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/*SUMMARY
- math random for user and computer numbers
- log the FIXED numbers 
- IF to check who won (larger number wins)
*/

//- math random for user and computer numbers
const userNumber = Math.random() * 100
const computerNumber = Math.random() * 100
//- log the FIXED numbers 
console.log(userNumber.toFixed(), computerNumber.toFixed());
//- IF to check who won (larger number wins)
if (userNumber > computerNumber) {
    console.log("user wins!");
} else if (computerNumber > userNumber) {
    console.log("computer wins!");
} else {
    console.log("draw");
}