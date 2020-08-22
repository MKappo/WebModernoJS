/*

Se tiver um falso fica falso
v e v = v
v e f = f
f e ? = f

Se tiver um verdadeiro fica verdadeiro
v ou ? = v
f ou v = v
f ou f = f 

Só é verdadeiro se for opostos
v xor v = f 
v xor f = v
f xor v = v 
f xor f = f 

!v = f 
!f = v 

*/



function compras(trabalho1, trabalho2) {

    const comprarSorverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2 //por que é mais interessante usar a ideia de diferente
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //Bitwise XOR
    const manterSaudavel = !comprarSorverte //Se comprar soverte true, saudavel tem que ser false
    //acima foi negação lógica operador logico unário outros operadores logicos binarios

    return { comprarSorverte, comprarTv50, comprarTv32, manterSaudavel }
    //Aqui não "tem" par chave/valor, mas no ES6 ele ficou inteligente e quando não passo da forma
    //padrão ele já entende e da o nome da chave igual a constante e o valor é o que a const carrega

}

console.log('Caso 1 ----------------------------------')
console.log(compras(true, true))

console.log('Caso 2 ----------------------------------')
console.log(compras(true, false))

console.log('Caso 3 ----------------------------------')
console.log(compras(false, true))

console.log('Caso 4 ----------------------------------')
console.log(compras(false, false))
















