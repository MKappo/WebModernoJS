function rand ([min = 0, max = 1000]){

    //Este if na realidade checa se o valor do atributo min, desconstruido recebido é maior 
    //do que o valor do atributo max, descontruido recebido.
    //Se for verdade, fazemos outro destructuring, criando um novo array que recebe max e min [max,min]
    //das entradas já desestruturadas, e a partir dele fazemos de fato o destructuring invertendo
    //onde o array[min, max] pega os atributos do array [max,min] invertendo... confuso né?

    if (min > max) [min, max] = [max , min]
    
    // Bom com isso tudo se resolve e então podemos fazer o resto.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda pra baixo.
}   

//Lembrando que aqui estou passando um array como entrada pra func.
//E o array respectivamente espra um min e max (pare o mouse sobre a func e verá)
console.log(rand([50,100])) 

console.log(rand([20,10])) //Aqui é o mesmo que acima porém o IF entrará em ação

//Aqui ele entende que o array tem só a primeira posição (min)
//Com isso ele assumirá o max o padrão definido (1000)
console.log(rand([900]))

//O mesmo acima mas neste caso como passei a virgula, ele entende que 900 é o max (indice 2)
console.log(rand([,900]))

//O mesmo acima mas neste caso pega os dois padrões.
console.log(rand([]))




