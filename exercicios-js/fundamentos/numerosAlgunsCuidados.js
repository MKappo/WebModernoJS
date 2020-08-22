/*
O JS tem uma tipagem chamada Infinity, quando mais proximo
do zero o numero é gigante e se for zero o JS retorn infinito,
em outras linguagem poderá dar erro.
*/
console.log(7 / 0)


/*
Em muitas linguagens esta operação abaixo daria erro
pois são tipos diferentes (string / integer)
Entretanto devido ao JS ser de tipagem fraca, ele consegue
realizar esta operação. String alias tem preferencia nesta resoluções.
*/

console.log("10" / 2) // Como a barra não faz sentido no mundo de strings ele divide
console.log("10" - 2) //Como - não faz sentido no mundo de strings ele subtrai
console.log("10" + 2) // Neste caso + faz sentido de concatenar logo ele faz a concatenação

/*
Porém dependendo do que vem na string, com uma virgula por exemplo
o resultado será invalido (NaN) 'Not a Number'
*/
console.log("10,2" / 2)

// É possivel tbm duplicar palavras fácilmente em algumas linguagens mas NÃO no JS
console.log("Show!" * 4)

/*
O Resultado não será 0.8 precisamente, devido a especificação de ponto flutuante do JS
A maior parte das linguagens usam esta mesma especificação, e gera esta imprecisão.
Se houvesse uma precisão as linguagens seriam mais lentas para executarem tais operações
*/

console.log(0.1 + 0.7)


//console.log(10.toString()) Esta operação daria erro. Não é possivel fazer direto no numero

// Já está operação é perfeitamente possivel, pois o numero está entre parenteses.
console.log(typeof (10).toString()) // coloquei type of apenas para provar que converteu
console.log((10.347).toFixed(2)) 


