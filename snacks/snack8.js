

let listNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let media = 0;

for (let i = 0; i < listNumero.length; i++) {
    media += listNumero[i];
}

media = media / listNumero.length;

console.log(media);