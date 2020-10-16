//Forma "old school" de fazer isso antes do ES6

function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(20))
console.log(soma(20,-20,30))
console.log(soma(0.5,0.5,0.75))
console.log(soma(3,5,2," Aqui Vale Tudo"))  //JS não limita, ele resolve a some e concatena depois
console.log(soma('a','b','c'))  //como soma inicializou com 0 ele vai concatenar 0 e as letras.
console.log(soma(10,20,50))