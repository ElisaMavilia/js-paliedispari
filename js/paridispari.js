/* Pari e Dispari 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */

let userChoice = prompt("Scegli tra pari o dispari");
let userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));
console.log(userChoice, userNumber);

let pcNumber = getRndInteger(1,10);
console.log(pcNumber);

let numbersSum = (userNumber + pcNumber);
console.log(numbersSum);


function result(odd, even){
    if(sum % 2 ===0){
      return(even);
   } else{
        return(odd);
    } 
}

if(result === userChoice){
    console.log("Hai vinto")
    } else{
        console.log("Hai perso");
    }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
