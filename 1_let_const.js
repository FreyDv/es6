// var  num = 42
//
// num  = 'asd'
// console.log(num)
//
//
// let a =24
//
// if(true){
//     let a =42
//     console.log(a)
// }
// console.log(a)

//Hosting

b = 20

console.log(b)
var b = 10

function hoisted (){
    age = 26
}

let age
hoisted()
console.log(age)


//Const

const array = [1,2,3,5,8]
console.log(array)
array.push(13)
console.log(array)


const obj  = {a:42}
obj.name = 'igor'

console.log(obj)
