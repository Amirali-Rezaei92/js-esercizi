// Definizione della variabile per memorizzare la somma totale dei numeri inseriti
let somma = 0;

// Avvio di un ciclo infinito per richiedere continuamente l'input dell'utente
while (true) {
    // Richiesta all'utente di inserire un numero o la parola "SOMMA" per terminare
    let numero = prompt("Inserisci un numero, oppure scrivi SOMMA per terminare e vedere il totale:");

    // Controllo se l'utente ha annullato l'inserimento (cliccando su "Cancel")
    if (numero === null) {
        // Notifica all'utente della somma totale e uscita dal ciclo
        alert("Hai annullato l'inserimento. Il totale è: " + somma);
        break;
    }

    // Controllo se l'utente ha inserito la parola "SOMMA" (case-insensitive)
    if (numero.toUpperCase() === "SOMMA") {
        // Notifica all'utente della somma totale e uscita dal ciclo
        alert("Il totale è: " + somma);
        break;
    }

    // Conversione dell'input dell'utente in un numero
    let valore = Number(numero);

    // Controllo se la conversione ha prodotto un numero non valido (NaN)
    if (Number.isNaN(valore)) {
        // Notifica all'utente di inserire un numero valido o la parola "SOMMA"
        alert("Per favore, inserisci un numero valido o scrivi SOMMA per terminare.");
    }

    // Aggiunta del numero valido alla somma totale
    somma += valore;

    // Continuazione all'iterazione successiva del ciclo
    continue;
}

// Notifica all'utente della somma totale dopo l'uscita dal ciclo
alert("Il totale è: " + somma);