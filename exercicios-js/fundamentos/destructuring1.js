// Novo recurso do EC6

const pessoa = {
    nome: 'Marcelo',
    idade: 34,
    nacionalidade: 'Brasileira',
    time: 'Palmeiras',
    endereco: {
        rua: 'Avenida Guaruja',
        numero: 107,
        bairro: 'Jardim Guaruja',
        cidade: 'São Paulo',
        estado: 'São Paulo',
        cep: '05877230'
    }
}

const { nome, idade } = pessoa

console.log(nome, idade)

const { nome: name, idade: age, nacionalidade: pais } = pessoa

console.log(`Olá, meu nome é ${name}, tenho ${age} anos de idade e minha nacionalidade é ${pais}!`)

// Este mode é uma forma mais simples de ao invés de apenas acessar os atribuitos via PONTO
// Desta maneira extraimos os atributos criando novas variareis/constantes 
// E ainda é possivel renomea-la (o atributo) conforme linha 22 acima.

//Também é fácil acessar atributos de objetos que estão dentro de outro objeto

const { endereco: {rua:address, numero: number, bairro: bairro}} = pessoa

console.log(`O meu endereço é ${address}, ${number}, ${bairro}`)

