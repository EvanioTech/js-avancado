/*const unique = Symbol('Hello')


Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1,2,3,4,10,15];
const it = arr[Symbol.iterator]();
//console.log(it.next());

while ('teste') {
    let {value, done} = it.next()
    if (done) {
        break;
} else{
   // console.log(value);
}
        
    
}
let str = 'Digital Inovation'

for (let value of str) {
    console.log(value);
}*/

const arr = [1,2,3,4];


const obj = {
    values: [1,2,3.4],
    [Symbol.iterator]() {
        let = i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        }
    }

}

const it = obj[Symbol.iterator]();

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function* hello () {
    console.log('Hello')
yield;
    console.log('My')
yield;
    console.log('Name')
yield;
    console.log('is')
yield;
    console.log('Sol')
}
const itr = hello()

console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
