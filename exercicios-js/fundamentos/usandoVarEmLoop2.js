const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

console.log(funcs.length)

funcs[2]()
funcs[8]()

//Veremos que no exemplo acima o index 2 e 8 vão retornar a função anonima que imprimi o valor de i
//Entretanto na hora de armazenar o i em cada função ele ia sempre sobrescrevendo pois o i foi declarado
//Como uma var (global), logo o resultado acima será 10 tanto pra func[2]() quanto para funcs[8]()