const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

console.log(funcs.length)

funcs[2]()
funcs[8]()

// Neste caso funcionara adequadamente por conta da declaração de i como restrita (LET)