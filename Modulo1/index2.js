 function log(value){
    console.log(value)
    return
}

log('teste') 
console.log('-----------------------------------')

let sum = (a,b) => {
   return a + b
}

console.log(sum(15,9))
console.log('-----------------------------------')

let e = a => a + 5
console.log(e(15))

console.log('-----------------------------------')

let createObj = () => ({ test:123});


console.log(createObj())

console.log('-----------------------------------')

function Car() {
    this.marca = 'Gol'
}
console.log(new Car());

console.log('-----------------------------------')

let oi = value => {
    console.log(value)
}

oi('new')

console.log('-----------------------------------')

let objNew = {
    showContext: function showContext() {
        console.log('testando');

        setTimeout(() =>{
            console.log('after 3000ms')
        }, 3000)
    },
    log: function log(value) {
        console.log(value)
    }
}
objNew.showContext()



