const imprimirResultados = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultados(10)
imprimirResultados(6)

//Até aqui jeito simples e tradicional de IF / ELSE


imprimirResultados('Epa!')  
// Por ser fracamente tipada, o que vai acontecer aqui é Reprovado, por que é como se estivessemos
// fazendo string >= 7 , não! nem tem nexo, logo esta comparação vai retornar false
// CUIDADO!




