/*CONSEGNA
Mail

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.
:puntare_a_destra: Bonus:
Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes
Nota: Non è necessario provvedere alla validazione delle email
 */

/*SUMMARY
- e-mail array
- prompt userMail
- for loop to check IF it's belong (includes in for loop)
- log result
*/

//- e-mail array-
const mailList = ["yacufojeddo-5843@yopmail.com", "citefeubosu-3756@yopmail.com", "xinocrarauje-2934@yopmail.com", "pixiprappalu-2459@yopmail.com", "dimmelo12@gmail.com"]
//- prompt userMail
const userMail = prompt("Type your e-mail example of email format:pincopallino@yopmail.com")
//- for loop to check IF it belongs in the array (includes with for loop method)
for (let i = 0; i < mailList.length; i++) {
    const thisMail = mailList[i]
    if (userMail === thisMail) {
        //- log result
        console.log("e-mail confirmed! Acces granted.");
    }
}
