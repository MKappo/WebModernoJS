// == é um simbulo relacional binário, logo true, por que o valor é igual
console.log('1)', '1' == 1) 

// === verifica tipo e valor, ou seja é um simbulo relacional binario estrito, portanto false.
console.log('2)', '1' === 1) 

// diferente ? simbulo relacional binário não estrito, logo false.
console.log('3)', '3' != 3) 

// diferente ? simbulo relacional binário estrito, logo true.
console.log('4)', '4' !== 4) 


console.log('5)', 3 < 2) 
console.log('6)', 3 > 2) 
console.log('7)', 3 <= 2) 
console.log('8)', 3 >= 3)

const d1 = new Date(0) //0 vai pra data de referencia do JS que é 1 Jan 1970 aproximadamente
const d2 = new Date(0)

console.log('09) ', d1 === d2)
console.log('10) ', d1 == d2)
//Ambos retornarão false, por que apontam referencias de memoria (diferentes)

console.log('11) ', d1.getTime() === d2.getTime())
//True por que ambos tem o mesmo tipo e o mesmo valor, ou seja == tbm seria true.

console.log('12) ', undefined == null)
console.log('13) ', undefined === null)
//Via de regra é recomendável usar o estritamente igual/diferente







 