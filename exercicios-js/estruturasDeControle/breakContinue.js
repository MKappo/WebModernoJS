//Desvios de Fluxos

//Primeiramente vale lembrar que o break como já vimos, pode ser usado em switch, for e while
//Já o Continue apenas em for e while

// O uso delas é desencorajado, mas naturalmente há casos válidos, mas eles disviam o fluxo
// e isso pode trazer confusão ao código... 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {

    //if (x == 5) break  //lembrando q está fora do bloco, um dos poucos casos q faz sentido usar assim
    //mas para deixar claro que o break não age no block if, façamos assim:

    if (x == 5) {
        break
        //Neste caso ele não funciona dentro do if e procura o bloco mais próximo para influenciar
        //o desvio, se não encontrasse ali o for, daria erro com certeza.
        //Ou seja não é o fato de estar no if, mas o fato de estar no FOR.
    }

    console.log(`Indice ${x} = ${nums[x]}`)
}


//Agora usando o Continue

for (y in nums) {
    if (y == 5) continue // lembrando que não age no if....
    console.log(`Indice ${y} = ${nums[y]}`)
}

// A lógica do desvio do continue é que quando a condição é atendida ele pula aquela iteração e segue
// para a próxima... Como estamos em um for..in não fica infinito, mas em outras ocasiçoes
// não será o continue que evitará o código entrar em um looop infinito...


//Agora uma aberração, supondo que vc tem um For dentro de outro e quer usar o break
//Naturalmente o break agiria no bloco mais proximo, do for interno
//Mas se quisesse usar este break no For externo, seria necessário usar ROTULOS

//Rotulos são formas de meio que colocar uma tag para um bloco, veja como ficaria

externo: for (a in nums){       //este primeiro for ficou tagAdo como externo
    for (b in nums){
        if (a == 2 && b == 3){
            break externo    //aqui forço o break no for tagAdo como externo
        }

        console.log(`Par = ${a}, ${b}`)
    }
}

// NÃO FAÇA NUNCA, USAR ROTULOS È MUITO FEITO... PENSE EM ORGANIZAR DE FORMAS MAIS ELEGANTES
// For dentro de for é muito complexos de se ler, melhor usar chamadas de funções....


