

// crea un array di frutti disponibili per la ricerca
let listaDiFrutti = ["mela", "banana", "arancia", "kiwi", "fragola"];

// chiede all'utente di inserire il nome di un frutto da cercare
let frutto = prompt("Inserisci il nome di un frutto");

// scorre tutti gli elementi dell'array usando un indice i
for (let i = 0; i < listaDiFrutti.length; i++) {
    // confronto il valore inserito con l'elemento corrente dell'array
    if (frutto === listaDiFrutti[i]) {
        // se trova corrispondenza, logghiamo la presenza e usciamo dal ciclo
        console.log("Il frutto è presente nella lista");
        break; // non serve continuare la ricerca
    } else if (i === listaDiFrutti.length - 1) {
        // se arrivo all'ultimo elemento senza trovare il frutto, allora non è presente
        console.log("Il frutto non è presente nella lista");
    }
}
