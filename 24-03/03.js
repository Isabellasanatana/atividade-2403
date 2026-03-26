let numeros = [1, 2, 3, 4, 5]
let numerosinverfetido = []

let contador = numeros.length -1

while(numeros[contador] >=0) { 
        
    numerosinverfetido.push(numeros[contador] ) 
   contador--
}
console.log(numerosinverfetido)