const [a, b, c, d] = [3, 5, 1, 15]

//operações binarias, dois operandos entre um operador, ou seja faz 1 por 1
//Seguindo regras de expressões dando prioridade para (), *, etc... 
const soma = a + b + c + d

//Estas operações chamamos de infix op1 + op2
//Mas temos tbm postfix ex: d++
//Ou até prefix ex: ++d

const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 //pega resto, se par sempre volta 0, se impar e devolve o resto 3/2 = modulo 1

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)


