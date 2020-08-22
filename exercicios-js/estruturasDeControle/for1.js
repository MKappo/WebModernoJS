// É possivel criar um while com loops pre determinados. Embora o for é o indicado

let contador = 1

while (contador <= 10) {

    console.log(`Contador = ${contador}.`)
    contador++

}

// Agora veja como com FOR é mais organico

for (let i = 0; i <= 10; i++){
    console.log(`i = ${i}`)
}


//Usando um array

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i = 0; i < notas.length; i++){
    console.log(`Nota = ${notas[i]}`)
}



