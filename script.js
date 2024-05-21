let numeriRipetuti = [ ];
let div = document.querySelector('div');

// Funzione randomica
function numberRandomInt(min, max) {
    return Math.floor(Math.random () * ((max + 1) - min)) + min;
}

// Funzione randomica unico numero
function numberUnicoRandom(numeriRipetuti, min, max) {

    let randomNumber;
    let question = false;

    while (!question) {
        randomNumber = numberRandomInt(min, max);

        // se il numero random generato NON è presente nella blacklist...
        if (numeriRipetuti.includes(randomNumber) === false) {
            // ... ho trovato il numero giusto. Esco dal ciclo.
            question = true;
        }
    return randomNumber;
}}

// Ciclo for 
for (let i = 0; i <= 5; i++) {
    numeriRipetuti.push(numberUnicoRandom(numeriRipetuti, 1, 100));
}

// Controllo con la console
console.log(numeriRipetuti);

// Aggiungere elementi al DOM
div.append(numeriRipetuti);

// Funzione per il timer
function timer () {
    div.innerHTML = ""
}
// Costante per intervallo
const clock = setInterval(timer, 5000);

// Prompt
function scriviNumeri () {
    for (let i = 0; i <= 5; i++) {
        const utente = Number.parseInt(prompt('Scrivi i numeri che hai visto'));
        
        if (numeriRipetuti === utente) {
            console.log('Questi sono i numeri da te individuati:' + utente);
        } else {
            console.log('Questi sono i numeri da te individuati:' + utente);
        }
    }
    console.log('Questi sono i numeri apparsi:' + numeriRipetuti);
    clearInterval(numeriVisivi);
    clearInterval(clock);
}

// SetInterval del prompt
const numeriVisivi = setInterval(scriviNumeri, 5500);





