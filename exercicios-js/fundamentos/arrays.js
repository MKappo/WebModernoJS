const valores = [7.7, 8.9, 6.3, 9.2] //é possivel criar e já iniciaza-lo com valores
console.log(valores[0], valores[3]) //é possivel resgatar indices especificos
console.log(valores[4]) // Se tentar printar um indice que não exite, não retorna erro, porém undefined

/*
Os Arrays no JS são flexiveis quanto a tipagem, receber qualquer tipo
E poder crescer ou diminuir de tamanho a hora que quiser, atribuindo novos valores
a qualquer momento.
*/

valores[4] = 10
console.log(valores[4]) //vai exibir valor novo atribuido
console.log(valores)

/*
Ao atribuir um valor a um indice novo porém pulando alguns
o JS é inteligente para interpretar que um range de indices estão vazio
*/

valores[10] = 20
console.log(valores) // Retornará [ 0, 1, 2, 3, 4, <5 empty items>, 10 ]
console.log(valores.length)

/*
É possivel misturar tipos diferentes de dados conforma abaixo, porém não é uma boa prática
O ideal é sempre criar um array com dados homogeneos, ou seja com dados do mesmo tipo.
*/

const novosValores = ['0', 1, '2', 3]
console.log(novosValores)

novosValores.push({ id: 3 }, false, null, 'teste')
console.log(novosValores)
console.log(novosValores.length)

console.log(novosValores.pop()) //Retira o ultimo elemento do array (aqui no caso exibe ele)
console.log(novosValores) // Aqui o ultimo valor já não exite mais no array
console.log(novosValores.length) // no caso do pop, o tamanho do array é alterado. CUIDADO!
 

// Desta forma tbm podemos deletar um dado de um indice, mas ele continua lá vazio.
delete novosValores[0]
console.log(novosValores)
console.log(novosValores.length) // no caso do delete, não altera o tamanho do array.

console.log(typeof novosValores) //Arrays em JS SEMPRE SERÁ DO TIPO OBJECT
