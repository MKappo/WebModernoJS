const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quandro de Honra!')
            break
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')

    }
}

imprimirResultado(10.9)

imprimirResultado(11)

imprimirResultado(8.99)

imprimirResultado(5.75)

imprimirResultado(4.99)

imprimirResultado(2)

imprimirResultado(0.999999)

imprimirResultado(-1)

// Resumindo, Switch é uma seleção multipla, não é um expressão relacional, sua entrada é apenas um dado
// Ou seja, não verifica se é v ou f, apenas pega o dado e trata ele de acordo com os cases.
// O Switch do js é "meia boca", por que por default ele passa em todos os blocos executando a menos
// que seja utilizado o break (que pula fora do switch apenas), além de que não é possivel juntar
// varios cases numa linha tipo: case dado1,dado2,dado3 : faça algo...
// É preciso colocar se preciso varios casos juntos pra executar uma ação, conforme acima.
// Tem uma palavra reservada default para ser uma especie de else, se nenhum case acontecer...
// O default não precisa ficar no final mas se colocar no meio ou inicio precisará do break
