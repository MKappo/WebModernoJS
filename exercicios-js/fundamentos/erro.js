
function tratarErroELancar (erro){

    //Nesta função, recebemos um erro, e através do throw podemos exibir todo tipo de retorno. Exp:
    //Nem toda linguagem tem esta possibilade de utilizar o throw com objetos e todo tipo de retorno.

    throw new Error ('Tem cagada ai no código do progamador, desculpe!')
    //throw 'Deu ruim!'
    //throw true    JS permite tudo isso..
    //throw 10
    /*
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } 
    */

}



function imprimirNomeGritado(obj) {

    // Tudo que estiver debaixo do Try ele vai TENTAR executar e se retornar erro vai pro catch
    try {

        console.log(obj.name.toUpperCase() + '!!!!')

    // O catch captura o erro e joga pra variavél 'e' permitindo vc tratar    
    } catch (e){

        //Aqui criamos uma func para tratar o erro...
        tratarErroELancar (e)
    
    //O finally sempre é executado independente se deu erro ou não, mesmo se passar pelo catch.
    }finally{

        console.log ('final')

    }

}

const obj = { nome: 'Roberto' } //estamos passando um atributo errado nome ao inves de name.
imprimirNomeGritado(obj)


// OBSERVAÇÂO SEMPRE È BOM EVITAR DE EXIBIR ERROS COM ESTRUTURAS, OU ERROS FEIOS NÂO TRATADOS OU
// NUMA LINGUA DIFERENTE...IDEALMENTE UMA MENSAGEM GENERICA OU CRIAR UM HASH PARA O USUÀRIOS TE
// MANDAR ESTE DETALHE E AJUDAR VOCÊ NUM POSSIVEL DEBUG....