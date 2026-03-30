


let listaNumero = [1,4,6,34,65,78,6,5,4,23,56,76,12,34,56,78,90,23,45,67,89,12,34,56,78,90];
let min=[0];
for(let i=0; i<listaNumero.length; i++){
    if(listaNumero[i]<min){     
        min=listaNumero[i];
    }
}
console.log(min);