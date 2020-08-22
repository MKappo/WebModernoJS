//Aqui estou criando uma função e nos paremtros já faço destructuring do objeto que ele receberá
//Da mesma forma que usamos [] ou {} logo apos a palavra reservada, que indica o destructuring
//Aqui os {} dentro dos parametros da funcão não indicam que estou criando um objeto
//Mas sim um destructuring.

function rand({ min = 0, max = 1000 }) {

    // O math returna algo ente 0 e 1 (float)
    // dai para delimitar um range maior multiplicamos pela diferença e somamos o minimo
    // Assim, haverá um numero retornando entre min e maximo sempre
    const valor = Math.random() * (max - min) + min

    //Mas como math.random é float, usamos o math.floor pra pegar um numero inteiro
    return Math.floor(valor)

}

//Aqui não é destructuring, mas criando um objeto com min e max
console.log(rand({ max: 100, min: 50 }))


//Como poderia tbm criar do modo tradicional e passa-lo pra função rand.
const obj = {
    min: 1,
    max: 20
}
console.log(rand(obj))


//E ainda como na minha declaração da func rand, eu fiz o destruction com valor padrão
//Se eu passar só um ou não passar nada ele se resolve com valores padrões veja

console.log(rand({ max: 50 }))
console.log(rand({ min: 950 }))

//Como foi definido um destructuring na criação da função, se chamar a função e não passar um obj
//Vai dar erro, por que as propriedades min e max do destructuring são undefined or null.
//console.log(rand())

