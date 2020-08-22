function soBoaNoticia(nota) {
    
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.2)

//Exemplo classico acima...



function seForVerdadeEuFalo(valor){
    if (valor){
        console.log('É verdade! ' + valor)
    }
}

seForVerdadeEuFalo() // o valor fica undefined e como undefined é falso, ele passa direte e nada
seForVerdadeEuFalo(null) // mesma coisa, null é false
seForVerdadeEuFalo(undefined) // mesma coisa
seForVerdadeEuFalo(NaN) // mesma coisa
seForVerdadeEuFalo('') // mesma coisa
seForVerdadeEuFalo(0) // mesma coisa
seForVerdadeEuFalo(-1)// Aqui já é true 
seForVerdadeEuFalo(' ') // Aqui já é true ou qq texto
seForVerdadeEuFalo('texto qualquer')
seForVerdadeEuFalo([]) //Array vazio é verdade
seForVerdadeEuFalo([1,2,4]) //Array é verdade tbm
seForVerdadeEuFalo({}) // Objeto vazio tbm é verdade
seForVerdadeEuFalo({nome: 'Marcelo'}) //objeto com propriedades tbm

// O Java script ele sempre vai converter para um true o false nestes casos do IF e seguirá
// conforme demonstrado acima.



