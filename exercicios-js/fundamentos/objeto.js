

//Podemos criar vazio e ir atribuindo dinamicamente
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Valor Qualquer'] = 5627.90 //Outra forma de criar atriutos com chaves, POREM EVITE usando ESPAÇO
console.log(prod1)

//Outra forma de criar objetos literais, lembrando que objeto é um conjunto de pares, chave e valor

const prod2 = {
    nome: 'Camisa Verde e Branco',
    preco: 250.00
}

console.log(prod2)