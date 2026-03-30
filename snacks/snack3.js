

let somma = 0;
while (true) {
    let numero = prompt("Inserisci un numero, oppure scrivi SOMMA per terminare e vedere il totale:");
    if (numero === null) {
        alert("Hai annullato l'inserimento. Il totale è: " + somma);
        break;
    }
    if (numero.toUpperCase() === "SOMMA") {
        alert("Il totale è: " + somma);
        break;
    }
    let valore = Number(numero);
    if (Number.isNaN(valore)) {
        alert("Per favore, inserisci un numero valido o scrivi SOMMA per terminare.");
    }
somma += valore;
} 
alert("Il totale è: " + somma);
