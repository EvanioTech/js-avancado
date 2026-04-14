function somar(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(somar(5,5,10,20,60))

function multiply(...args) {
    return args.reduce((acc, value) => acc * value, 1);
}

console.log(multiply(5,5,4,10,5))

let palavra = "MatiasDevFs"


function contarLetras() {
    
   
   return arguments.length

}
let teste = contarLetras(...palavra)

console.log(`Sua palavra tem ${teste} Letras`)

let notas = [ 8,7,5,9]

function calcMedia(a,b,c,d) {
    return (a+b+c+d)/4
}

console.log(calcMedia(...notas))