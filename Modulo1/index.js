function soma(a , b) {
    return a + b
}

soma(6,5)
console.log(soma(6,5))

let somar = (c,d) => c + d

console.log(somar(60,5))

let alunos = () => ({
    nome: 'João',
    age: 18,
    estudante: true
})
console.log(alunos())
// nao consigo usar arrow function pra ser um construtor
// arrow functions não podem ser declaradas antes
function Car(modelo,ano) {
    this.modelo = modelo
    this.ano = ano
}

console.log( new Car("Gol",95))

let caixaFunctions = {
    vezes: function multiplicar(a,b) {
        return a * b
    },
    dividir: function dividir(c,d) {
        return c / d
    },
    aparecer: function show() {
        setTimeout(() =>
        {
            this.log("after 2 seconds");
        }, 2000);
    },
    log: function log(value) {
        console.log(value)
    }

}

console.log(caixaFunctions.vezes(5,5))
console.log(caixaFunctions.dividir(5,5))
caixaFunctions.aparecer()

function multiply(a,b=1) {
    return a * b
}

console.log(multiply(5))

function bv() {
    console.log('Bem vindo!!!!')
}

let obj = {
    bv
}

obj.bv()