

let listNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let divisibilePer2 = [];

for (let i = 0; i < listNumero.length; i++) {
    if (listNumero[i] % 2 === 0) {
        divisibilePer2.push(listNumero[i]);         
    }
}
console.log(divisibilePer2);