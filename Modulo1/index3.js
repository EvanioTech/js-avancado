function multiplicar(a,b = 5) {

    if(b<10) {
        console.log('coloque um numero menor')
    }
    return a * b
}

console.log(multiplicar(5,11))
console.log(multiplicar(5))


function ramdomNumber() {
   
    return Math.random().toFixed(1) * 10;
}

function multi(a,b = ramdomNumber()) {
    console.log(b)
    return a * b
}

console.log(multi(5))