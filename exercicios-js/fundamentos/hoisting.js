//Hoisting:Içar, Levantar, Guindar...

console.log('a = ' + a)

var a = 1

console.log('a = ' + a)

//Em muitas linguages a sequencia acima daria um erro, pois "a" na linha 3 não foi declarado.
//Porém no JS a declaração que ocorreu só na linha 5 sofre o hoisting, ou seja, ela é içada para cima.
//Assim sendo este código não gera nenhum erro, por que o interpretador tem esta capacidade.
//Se a linha 5 for comentada, ai sim haverá um erro no qual "a" não foi declarado.


//Primeiro ele retorna undefined (como vimos em aulas anteriores)
//Depois retorna 1 conforme atribuido a variável 1

//Isto se aplica também dentro de funções, o içamento/hoisting tbm ocorre.
//MAS por que fazer isso? Não há !!! hehehe Logo declaremos as variáveis primeiro :/

//IMPORTANTE, o HOISTING SÓ SE APLICA A VAR, QUANDO DECLARADO COM LET, VAI GERAR ERRO.


//www.w3schools.com/js/js_hoisting.asp
//Hoisting is JavaScript's default behavior of moving declarations to the top.



