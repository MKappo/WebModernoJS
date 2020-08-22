//Logo de cara um ponto interessante é o fato de que While é usado quando não sabemos a quantidades
//de vezes que precisaremos ficar em loop, pois quando temos isso definido o FOR é mais apropriado.
//

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,20)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima...')

//Outro ponto é que ele pode ou não entrar no laço a depender da condição..
