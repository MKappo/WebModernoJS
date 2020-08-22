//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // JS aceita receber menos inputs na função, mas o segundo valor no caso fica undefined
imprimirSoma(2, 20, 4, 5, 6) // Vai pegar os dois primeiros e ignorar o resto e funcionará
imprimirSoma() // Ainda sim vai retornar sem erro, claro um NaN mas não dará erro. FLEXIBILIDADE



//Função com Retorno

function soma(a, b = 1) { //Lembrando que depois o ES6 é possivel definir valores padrões b = 1 
    return a + b
}

console.log(soma(2, 3)) //Obviamente estou jogando num console.log por que a função apenas retorna valor.
console.log(soma(2)) // como um valor padrão foi definido, ele não vai retorna NaN se passarmos 1 valor.
console.log(soma()) // Continuará retornando NaN, por que ai o primeiro valor é undefined.



