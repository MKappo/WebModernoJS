const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 1.2

console.log(peso1,peso2)

//Neste Caso ele vai retornar TRUE dizendo que é um numero inteiro por que 1.0 = 1
console.log(Number.isInteger(peso1))

//Neste Caso ele vai retornar FALSE dizendo que não é um número inteiro por que 1.2 != 1
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixe define quantidade de casas após a virgula
console.log(media.toString()) //Converte valor em STRING

/* 
Os parametros do método toString podem ser:

2 - The number will show as a binary value
8 - The number will show as an octal value
16 - The number will show as an hexadecimal value
*/

console.log(media.toString(2))

console.log(typeof media)
console.log(typeof Number)



