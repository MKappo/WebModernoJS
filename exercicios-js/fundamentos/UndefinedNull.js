
const a = { name: 'Teste' }
console.log(a)

const b = a  // Aqui uma cópia do endereço da memória é replicado ou seja a e b apontam pro mesmo lugar
console.log(b)

b.name = 'Opa'
console.log(b) // Agora o atributo name de 'b' que recebeu novo valor, exibira o novo valor 

/*
Porém como a atribuição de um objeto a outra constante, aponta pro mesmo lugar da memoria,
logo, muda um, muda todos, e ai o atributo name de 'a' passou a ser igual ao novo valor do atributo 
name de 'b'
*/

console.log(a)


/* 
Aqui já são valores primitivos de variáveis, e ai neste caso cada um segue sua vida. 
Não tem atributos como um objeto, então ele não herda nada, cada variável segue sua vida
sem uma afetar a outra.
*/

let c = 3

let d = c

d++

console.log(c)
console.log(d)


let valor // Não inicilizada, nem todas linguagens tem este conceito de undefined
/*
Retorna undefined por que não tem nada atribuido porém a linguagem reconhece que exite
uma variável com este nome porém sem valor atribuido, logo undefined.
*/
console.log(valor)

//console.log(valor2) 
/*
O que é diferente aqui, pois a variável valor2 nem existe,
não foi declarada log da ERRO de execução (not defined).
*/


/*
Aqui a variável valor3 foi inicializada, logo não é undefined, 
porém estamos dizendo que não possui nenhum valor ao atribuir a palavra exclusiva null.
Ou seja ela não aponta para nenhum local de memoria que armazene um valor, obj, ou func, logo é null.
*/

let valor3 = null
console.log(valor3)

/*
É importante deixar claro que não é boa pratica setar undefined para nenhuma variável, 
devemos deixar que isso o JS faça sozinho quando nos não inicializarmos alguma variável.
Agora, quando quisermos tirar a referencia de memoria de uma variavel que estava apontando
para um valor, função ou objeto, ai sim podemos atribuir null propositalmente.
*/

/*
Outro ponto importante é que variáveis com valor nulo, não podem chamar propriedades, 
funções e etc. Logo o exemplo abaixo retorna um type error dizendo exatamente isso, 
que a função, objeto, etc não está disponivel para um nulo. veja:
*/

//console.log(valor3.toString())
//Aliás no vscode, nestes casos ele nem funciona o auto-complete.


//criando um objeto, logo não é null nem undefined, ele retorna um objeto vazio {}
const produto = {}
console.log(produto)


//Aqui não dará erro de execução, porém vai retornar undefined pois a propriedade preco não foi criada
console.log(produto.preco)
//E se eu insistir e ainda tentar usar uma função, ou atributo de preco, ai da erro, por que 
//não é possivel chamar uma propriedade, função, etc de um atributo undefined (no caso preco)
//console.log(produto.preco.funcX)

//Agora sabendo que produto é objeto e de forma dinamina, criarmos o atributo preço atribuindo valor
//O exemplo acima não retorna erro como vemos abaixo
produto.preco = 3.50
console.log(produto.preco) //o Autocomplete até funciona aqui...
//e agora no caso se eu insistir depois do preço, retorna undefined e depois da erro...
console.log(produto.preco.funcX) //undefinded por conta do funcX
//console.log(produto.preco.funcX.funcY) // Da erro por tentar uma propriedade de uma func undefined


// Aqui já retorna undefined por que foi criado mas não inicializado
let produto2
console.log(produto2)
// MAS SE FOSSE CONST, dava erro! por que toda const tem que ser inicializada ao ser criada!
//const produto3
//console.log(produto3)


produto2 = {}
produto2.preco = undefined //Evite fazer isto, e atribuir undefined a uma variável ou const.
console.log(!!produto2.preco)

/*
 Neste exemplo ao inves de retornar undefined para produto2 ele exibe o detalhe do objeto
 exibindo o atributo inicializado (preco) e o atributo ele diz que é undefined.
 Mas é um pratica não recomendável.
*/
console.log(produto2) 
//delete produto2.preco //forma de retornar o objeto válido mas vazio.
//console.log(produto2)

produto2.preco = null //sem preço, cenário valido para expressar que o atributo não tem vlr atribuido
console.log(!!produto2.preco) // tbm retorna falso.
console.log(produto2)






