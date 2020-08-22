//armazenando uma função em uma variavel ou constante

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(3,7)


//armazenando uma função arrow em uma variavel ou constante

const soma = (a, b) => {
    return a + b
}

console.log(soma(7, 10))

//returno implicito

const subtracao = (a, b) => a - b 

console.log(subtracao(50, 30))

//É possivel reduzir ainda mais a sintaxe se nossa função tiver apenas um parametro

const imprimir2 = a => console.log(a)

imprimir2("Uma forma ainda mais simples de criar arrow function")