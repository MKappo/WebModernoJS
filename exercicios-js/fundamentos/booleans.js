let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/*
JavaScript também é possivel transformar dados que não são trur or false
em dados booleanos. Se na sua logica 1 é algo verdadeiro, então é possivel tratar o 
dado da seguinte maneira
*/

isAtivo = 1
console.log(!!isAtivo) // !!true = true  !!false = false  ! expressa negação

console.log('Os verdadeiros: ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))  //Não é sobre a atribuição mas olha o valor atribuido

console.log('Os falsos: ')
console.log(!!0)
console.log(!!'') // Aqui não tem nem espaço em branco
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false)) //Não é sobre a atribuição mas olha o valor atribuido

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // neste caso se 1dado for true ele retorna true se não false

/*
Uma forma interesante é de entender que o console.log 
vai imprimir sempre o verdadeiro se houver ou primeiro valor 
verdadeiro que encontrar, se não ele imprime o valor falso.
Mas sendo assim é possivel usar a seguinte lógica
*/

let nome =''

/*
Como nome não tem nada, nem espaço a expressão retorna o primeiro valor verdadeiro que é Desconhecido
*/

console.log(nome || 'Desconhecido') 
