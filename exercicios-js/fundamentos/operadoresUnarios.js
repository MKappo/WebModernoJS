let num1 = 1
let num2 = 2

num1++ //forma unária pos-fixada
console.log(num1)

--num1 //forma unária pre-fixada de subtrair (maior precedencia)
console.log(num1)

//Pense verdadeiro ou falso ??
console.log(++num1 === num2--) //false minha aposta

//Porém, dará true porque a comparação acaba acontecendo antes do incremento pósfixado de num2
//Ou seja quando a comparação ocorre, num1 e num2 são iguais... 

console.log(num1 === num2) // Agora sim false depois da linha 11





