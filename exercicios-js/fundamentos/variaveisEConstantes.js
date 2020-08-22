var a = 3
let b = 4

var a = 30
// let = 40   Veja comentário maior abaixo
b = 40 // neste caso funcionará pois estou alterando valor de uma variável já declarada.

console.log(a,b)

/*
Por questões de efeito didático, ao printar este código
enfrentaremos um erro, que na realidade já é possivel verifica-lo
antes mesmo da execução na aba PROBLEMS, por que a variável declarada como 
LET não pode ser utilizada novamente, diferente da variável declarada como 
VAR, esta alias é uma das diferenças entre um modo e outro de declaração de
variáveis.
*/


const c = 5
// c = 50  acarretaria em erro, pois constante não consegue receber novos valores

console.log(c)


