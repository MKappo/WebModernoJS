const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4, 5,  , 7]
console.log(n1, n3, n5, n6)

//A ideia aqui do destructuring é a mesma mas usamos []... 
//usando esta estrutura eu consigo criar variaveis que pega valores de diferentes indices
//No caso de n6 eu criei a ideia (valor padrão), se não tiver nada, ou seja, undefined, retorne ZERO.

const [, [, nota]] = [8, [7, 10, 11], 22]
console.log(nota)

//xtrair de um array um valor de outro array. Mas não é usual, por ser de dificil leitura