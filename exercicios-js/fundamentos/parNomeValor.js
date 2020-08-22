// par nome/valor esta presente nas declarações não apenas dentro de objetos mas tbm nas vars/consts

const saudacao = 'Opa!'  //Contexto léxico 1 (onde fisicamente aquele par chave/valor foi definido)

function exec() {
    const saudacao = 'Falaaaa galeeraaa' //Contexto léxico 2 (local definido não é o mesmo da anterior)
    return saudacao //Não gerará conflitos por que está no contexto restrito.
}

//Objetos portanto, são grupos de aninhados de pares de chaves e valores.

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Avenida Guarujá',
        numero: 107,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

//Exemplos importantes para enxergar o escopo e pares nomes de valores iguais porém em contextos !=
