//Exemplos abaixo apenas para lembrar que estamos acessando funções de objetos através do . PONTO

console.log(typeof console) 
console.log(Math.ceil(8.2)) //math.ceil serve para arredondar para cima (sempre inteiro)

const obj1 = {}
obj1.nome = "Bola" //o ponto aqui serve para atribuir dinamicamente uma propriedade ao objeto ja criado
console.log(obj1)

function Obj (nome){
    this.name = nome //o this torna o atributo visivel.
    teste = nome //aqui não ficaria visivel, e precisaria retornar o test no caso.
    return teste // usando o return, sendo redundante ai sim farei a função retornar o teste.
}

const obj2 = new Obj('Cadeira')

console.log(obj2.teste) // Veja que retorna undefined por que ele não é visivel na função
console.log(obj2.name) // Vai retornar a cadeira por que o atribuito passou a ficar visivel com o this
console.log(Obj('Vejam isto')) //Como usei o return teste ele devolve a entrada.




