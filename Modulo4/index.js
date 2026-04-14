// promisses

let promisse = new Promise((resolve, reject) => {
    //throw new Error("Tem algo errado");
    
    setTimeout(function() {
        resolve('Primeiros dados');
    },1000);

});

let promisseOther = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Segundo dados');
    },2000);
})

console.log(promisse)
promisse
.then( data => { console.log(data) ; return promisseOther})
.then( data2 => console.log(data2))
.catch(error => console.log(error))

// Pending || Fulfilled || Rejected