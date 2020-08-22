console.log(typeof Object) // Object é uma função dentro do Java Script

console.log(typeof new Object) // Mas qdo eu uso new para instanciar apartir de Object, ai crio um Objeto

// O mesmo para funções que criarmos.

const Cliente = function(){}

console.log(typeof Cliente)

console.log(typeof new Cliente)

class Produto {} //ES6 

console.log(typeof Produto) // apenas um forma nova, porém classe viram functions no JS

console.log(typeof new Produto) // Uma vez instanciado, vira um objeto.