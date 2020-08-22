let a = 3

console.log(this.a) //Não encontra 'a' pois não foi declarada de forma global
console.log(global.a) //mesmo chamando o objeto global que equivale ao window do browser no JS

global.b = 123

console.log(global.b) // Aqui já retorna por que foi criado uma variável b direto no global

this.c = 456  

console.log(this.c) // mesmo caso pois o this equivale ao global, quando não está dentro de um bloco

console.log(module.exports.c) // module exports === this

console.log(module.exports === this)

this.d = false
this.e = 'teste'

console.log(module.exports) 

//JS para cada arquivo ele entende como um modulo, logo quando criamos a partir do this, ele
//joga pra fora do modulo, deixa global, por isso this === module.exports, literalmente.


//module.exports = { f: 456, g: false, h: 'teste' }
//Equivale ao mesmo acima this.d e this.e pois estamos exportando como se fosse um objeto
//Alias mais comum.

//criando uma variável maluca (não fça isso de jeito nenhum)
abc = 3 //Acaba criando uma variável global no node.js
console.log(global.abc)


//ENTENDA OS RUNTIMES 
//FUJA DOS ESCOPOS GLOBAIS e SE PRECISAR TOCA-LOS FAÇA-O APARTIR DE OBJETOS....
