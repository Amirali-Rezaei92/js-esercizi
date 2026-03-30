

let lista = [1, 4, 2, 3, 3, 4, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 0, 0, 11, 23, 23, 23, 35, 35, 64, 64, 55, 33, 4, 5, 7, 8, 6, 5, 4, 3, 5, 6, 7, 8, 9, 0, , 8, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let numero = Number(prompt("inserisci un numero:"))
let ripetizioni = 0;
for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
        ripetizioni++;
    }
}
console.log(`il numero ${numero} è presente ${ripetizioni} volte nella lista`);