
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('Valor de i = ' + i) 

// Aqui um erro será gerado, pois este i aqui não exite no escopo global
// O i do loop foi criado com let, portanto ele fica restrito apenas ao bloco que foi criado
// Ou seja apenas dentro do loop.



