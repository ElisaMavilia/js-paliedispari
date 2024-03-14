/* Palidroma 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

let userWord = prompt("Inserisci una parola");
console.log(userWord);

function checkPalindrome (palindrome){

 let createArray = palindrome.split (''); //Trasforma la stringa in un array
    console.log(createArray);

 let reverseArray = createArray.reverse(); //Stampa l'array al contrario
 console.log(reverseArray);

 let reverseWord = reverseArray.join(''); //Riunisce le singole lettere in una stringa;

 if(palindrome === reverseWord) {
    console.log('La parola è palindroma');
 } else{
    console.log('La parola non è palindroma');
 }
 
}





