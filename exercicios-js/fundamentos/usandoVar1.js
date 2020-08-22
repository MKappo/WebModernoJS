{ 
    { 
        { 
            { 
                var sera = 'Será ???' 
            } 
        } 
    } 
}

console.log(sera)

/*
Este exemplo serve para introduzir a ideia de escopo e também qual limitação 
e escopo das variaveis criadas apartir do var.
Em outras linguagens o escope é bem mais restrito, quanto onde a variavel fica visivel
e no caso do JS a questão é mais flexivel mas algumas considerações. por exemplo:
Esta regra de escopo não se aplica em variáveis declaradas dentro de uma função, que neste caso fica
restrito apenas a função conforme exemplo abaixo
*/

function teste (){
    var local = "somente visivel no escopo da função"
    console.log(local)
}

teste()

//console.log(local) // Retorna erro por que a variável não foi definida.


/*
O exemplo que ele deu foi explicar que quando criamos var ele cria uma variavel 
global, e se criarmos uma nova variavel com o mesmo nome ele vai sobreescrever 
a variavel global criada anteriormente. E isto é um perigo dentro do java script.

Por um lado vc acessa ela de qualquer lugar, mas num programa que muitas pessoas usam, 
poderá trazer inumeros problemas no caso de sobrescrever.

Variavel (do ponto de vista do browser) tem apenas dois tipos de escopo
ou visivel de forma global ou restrita dentro de um bloco especifico.

*/
