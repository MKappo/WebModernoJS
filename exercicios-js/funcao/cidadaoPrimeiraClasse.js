// Função em JS é First-Class Object (Citzens)
// Higher-order function

/* 
Isto se dá quando a linguagem trata a função como dado, ou seja é possivel usa-la como um parametro
Quando se existe uma outra função dentro da função, diferente de quando antigamente isto era tratado 
de forma bem separada. Assim abre-se um leque de possibilidades.
*/

//Criando de forma literal
//Lembrando que toda função no JS retorna alguma coisa ainda que não seja explicitado o return
//Não é obrigado coloca-lo mas neste caso ela vai retornar como undefined.
function fun1(){ }

//É possivel armazena-la em uma variável
const fun2 = function () { }

//É possivel armazena-la em um array
const array = [function (a,b) {return a+b}, fun1, fun2] 

console.log(array[0](7,3)) //Executando uma funcao dentro de um array.


//É possivel armazena-la dentro de um atributo de um objeto
const obj1 = {
    soma: function fun3 (a,b){return a+b},
    nada: fun1,
}

const obj2 = {}

obj2.falar = function () {return 'Opa e ai, tudo bem?'}

console.log(obj1.soma(7,7))
console.log(obj1.nada())
console.log(obj2.falar())

//É possivel passar uma função como parametro
function run(fun){
    fun() //o parenteses invoca a função
}

run(function () {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(3,3)(4)

const seisMais = soma (3,3) //Outra forma mais legivel....

seisMais(6)

