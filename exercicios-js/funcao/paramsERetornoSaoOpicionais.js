function area(largura, altura){

    const area = largura * altura

    if (area > 20){
        console.log(`Área acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2)) // o segundo parametro seria undefined, e undefined * um numero = NaN
console.log(area())  // undefined * undefined = NaN
console.log(area(2,2,4,5,5,))  // Ele pega os dois primeiros params e ignora os demais (não da erro)

//Aqui ele vai printar o console por que cai na condição, mas vai dar undefined.
//O Undefined é por que a função não tem um retorno definido (por que não cai no else)
console.log(area(30,2)) 

