const nome = 'Thais'
const concatenacao = 'Olá ' + nome + '!!!'

// Template string ele faz interpolação e também considera quebra de linhas e espaços

const template = `
    Olá 
    ${nome}!`

console.log(concatenacao)
console.log(template)

//Usando Template Strings é possivel também criar expressões
console.log(`1 + 1 = ${1 + 1}`)

// É possivel chamar funções tbm, embora seja mais comum chamar nomes de variáveis. (apenas no ES2015)
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)
