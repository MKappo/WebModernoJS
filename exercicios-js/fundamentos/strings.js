const escola = "Cod3r"

console.log(escola.charAt(4)) //Função charAt serve para retornar um caracter da string
console.log(escola.charAt(5)) //Java script é mais relex, não retorna erro neste caso (palavra de 0 - 4)
console.log(escola.charCodeAt(3)) //Retorna o códido da tabela unicode.
console.log(escola.indexOf('d')) //Retorna a posição do caracter que foi indicado no caso 2
console.log(escola.substring(1)) // Retorna o indice + tudo que tiver depois, no caso "od3r" (index >=1)
console.log(escola.substring(0,3)) // Retorna tudo entre parametro start e end (index >= 0 e <3)
console.log("A escola se chama ".concat(escola).concat('!!!!')) //Concatenar apartir de um literal
console.log(escola.replace(3,'e')) //Replace um determinado caracter (VER REGEX)
console.log("Maria, João, Lucas".split(',')) //Transformar um grupo de textos em array
