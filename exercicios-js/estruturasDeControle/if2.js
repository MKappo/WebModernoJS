function teste1 (num){
    if (num > 7)

        //pulei varias linhas para mostrar que é a sentença de código seguinte considerada.

console.log(num) // não importa a indentação




    console.log ('já está fora do IF')

                                            console.log ('final') //não importa a indentação
}

teste1(6) // if == false
teste1(8) // if == true

// O JS não é orientado a identação igual o python, logo ele só vai ler a sentença de codigo seguinte 
// como fazendo parte da estrutura do IF verdadeiro, se for falso a segunda sentença em diante é
// tratada como fora da estrutura do IF.

function teste2 (num){
    if(num > 7);{
        console.log(num)
    }
}

teste2(6) // if == false
teste2(8) // if == true

/*
No caso acima temos uma pegadinha que precisamos nos atentar.
como o JS não é orientado a identação, pouco importa como organizamos conforme eu mostrei acima
Alias podemos escrever varias "linhas" de código numa só linha, desde que utilizemos o Ponto e Virgula
Por esta razão é que chamamos sentença de código, nome mais apropriado.
E no caso acima o ponto é virgula é uma sentença de código, o que vem depois dele é outra sentença
Portanto, no exemplo acima a sentença associada a estrurua do IF é o ponto e virgula que nada faz.
Por esta razão o código acima exibirá tanto o 6 quanto o 8. O código entre outras palavras seria isso:

function teste2 (num){      sentença de código 1 iniciando bloco
    if(num > 7)             sentença de código 2 iniciando if
    
    ;                       sentença de código 3 que é executada se o IF = true
    
    {
        console.log(num)    sentença de código 4 que está dentro de outro bloco
    }
}


*/


// MORAL DA HISTORIA... CUIDADO COM ; E MAIS, MELHOR USAR {} NAS ESTRUTURAS, EVITA PROBLEMAS...
