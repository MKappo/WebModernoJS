var numero = 1

{
    let numero = 2
    console.log('Dentro = ' + numero) 
}

console.log('Fora = ' + numero)

// No exemplo acima vai imprimir 2 e 1 por que apesar do mesmo nome cada variável está em seu escopo
// Como usa o mesmo nome o JS procura primeiro o menor escopo daquela variavel e usa, se não usa outro 
// Exemplo:

var numero2 = 1

{
    let numero3 = 2
    console.log('Dentro = ' + numero2) 
}

console.log('Fora = ' + numero2)

//Neste caso acima vai imprimir 1 e 1 por que neste caso numero2 não tem num escopo restrinto então o JS
//bucará em um escopo maior e encontrará o numero2 do escopo global, que é 1

//E mesmo que a gente tentasse imprimir como primeiro exemplo porém havendo aas duas sido 
//declaradas como LET, tbm não acontecerá conflito

let numero4 = 1

{
    let numero4 = 2
    console.log('Dentro = ' + numero4) 
}

console.log('Fora = ' + numero4)

