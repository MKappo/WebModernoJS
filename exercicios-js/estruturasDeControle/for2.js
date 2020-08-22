// Existem maneiras melhores de percorrer objeto e array usando map, reduce, filter foreach
// Mas o FOR IN pode tbm ser usado, embora não é a melhor alternativa

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(`Indice ${i} = ${notas[i]}`)
}


// Ampliando a ideia para percorrerum os atributos de um objeto

const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Capobianco',
    idade: 34,
    peso: 107
}


for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
    console.log(typeof atributo) //veja que é uma string.
}


/* DUVIDAS QUANDO AO EXEMPLO DO OBJETO COM FOR IN

}

for(let atributo in pessoa){

console.log(`${pessoa[atributo]}`)// porque assim retorna

console.log(pessoa.atributo) //e assim não?

}

É porque com o pessoa[atributo] você está acessando os atributos dentro do pessoa
a partir de uma String, e ele tá iterando as propriedades do objeto e essas propriedades 
são retornadas como uma String, por isso são impressas 'fulano' e '20'.

No geral, isso é devido a uma regra de formação da linguagem de programação.
Se você imprimir um typeof de atributo, verá que é uma String; não faz sentido para a linguagem fazer pessoa.atributo se pessoa.atributo significaria pessoa."nome" ou pessoa."idade".
Por exemplo:

const pessoa = {
  nome: "Fulano",
}
Fazer o console.log(pessoa."nome") não faz sentido do ponto de vista da linguagem.

*/

console.log(pessoa.nome) // Perfeito por que pessoa é um objeto veja:
console.log(typeof pessoa) // Object

// Assim solto dará erro por que não é a sintaxe p/ acessar o atributo de um objeto
// console.log(pessoa[nome]) 

//Agora dentro do bloco do For...in a variável atributo (string) recebe a chave dos atributos
//e apartir de então eu acesso os atributos do objeto atráves de uma String que retorna o valor em strg
