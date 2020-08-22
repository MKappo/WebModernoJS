
/*
Criando uma arrow function, lembrando que 'nota' é o parametro da função
e como só tem um não precisa dos (). 

Na sequencia vem o operadore ternário, ou seja tres operandos, primeiro a expressão relacional 
E a partir do resultado true or false ele vai retornar para resultado.

Lembrando que estra estrutura ternária se equivale ao IF/ELSE ma aqui com sintaxe reduzida.
E vale adicionar que uma arrow funtion não pode usar return, mas como usamos uma operação ternaria
haverá um retorno intrisseco. 
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'   // Precisa sempre v ou f e resultados


console.log(resultado(7.1))
console.log(resultado(5))

//Poderiamo tbm usar uma constante para armanezar o resultado de uma operação ternária
//Não precisa necessáriamente ser uma função.

let nota = 8

const status = nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(status)



