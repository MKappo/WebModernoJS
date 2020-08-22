Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {

    if (nota.entre(9, 10)) {

        console.log('Quadro de Honra!')

    } else if (nota.entre(7, 8)) {

        console.log('Aprovado!!!')

    } else if (nota.entre(4, 6)) {

        console.log('Recuperação')

    } else if (nota.entre(0, 5)) {

        console.log('Reprovado')

    } else {

        console.log('Nota Inválida! Informar nota >= 0 <=10')

    }

    console.log('fim') // Apenas para mostrar que ele só vai entrar em uma das condições...
}

imprimirResultado(2)
imprimirResultado(4)
imprimirResultado(7)
imprimirResultado(9)
imprimirResultado(-1)

//Lembrando que podemos usar quandos else ifs que quiser, mas para este tipo de caso existe soluções
//melhores...