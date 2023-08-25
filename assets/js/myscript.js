/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/


//Scrivi un programma che stampi in console i numeri da 1 a 100

const listEl = document.getElementById('list');


for (let i = 1; i <= 100; i++){
    // console.log(i);
    const listItem = document.createElement("li");
    if ((i % 3) === 0 && (i % 5) === 0){
        console.log('FizzBuzz');
        listItem.innerText = 'FizzBuzz';
    }
    // è divisibile per 3
    else if (i % 3 == 0) {
        console.log('Fizz');
        listItem.innerText = 'Fizz'; // 3ciclo
    }
    // divisibile per 5
    else if (i % 5 == 0){
        console.log('Buzz');
        listItem.innerText = 'Buzz';
    }
    // divisibile per 3 e per 5
     else {
        // non è divisibile ne per 3 ne per 5 
        console.log(i);
        listItem.innerText = i; // 1ciclo, 2ciclo, 3ciclo
    }
    
    // 
    listEl.append(listItem);
}

