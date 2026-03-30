

// crea un array di frutti disponibili per la ricerca
let listaDiFrutti = ["mela", "banana", "arancia", "kiwi", "fragola"];

// chiede all'utente di inserire il nome di un frutto da cercare
let frutto = prompt("Inserisci il nome di un frutto");

// scorre l'array per cercare il frutto inserito
for (let i = 0; i < listaDiFrutti.length; i++) {
    // confronto il valore inserito con l'elemento corrente
    if (frutto === listaDiFrutti[i]) {
        // se trova corrispondenza, logga la presenza e esci dal ciclo
        console.log("Il frutto è presente nella lista");
        break; // non serve continuare
    } else if (i === listaDiFrutti.length - 1) {
        // se arrivo all'ultimo elemento senza trovare il frutto, allora non è presente
        console.log("Il frutto non è presente nella lista");
    }
}