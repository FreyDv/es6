/*
* 1 Number
* 2 BigInt
* 3 boolean
* 4 string
* 5 undefined    typeof вернет undefined
* 6 null         typeof вернет object   не смотря на то что это   примитив
* 7 symbol
* 8 Object
* */

const symbol1 = Symbol('demo')
const symbol2 = Symbol('demo')

console.log(symbol1)
console.log(symbol2)

console.log(symbol1===symbol2)

const obj = {
    name: 'Elena',
    demo:'Demo',
    [symbol1]: 'meta'
}



console.log(obj[symbol2])

for (const objKey in obj) {
    console.log(objKey)
}


