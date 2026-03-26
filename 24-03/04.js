let numeros = [1, 2, 3, 4, 5]
let contador = 0
let somar = 0
while (contador < numeros.length) {
   
    if (numeros[contador]) {
        console.log(numeros[contador])
     somar += numeros[contador];

    }
   contador++
}

console.log(somar);