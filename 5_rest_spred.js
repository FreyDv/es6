//Rest - сварачивает масив

//Принимает масив
function average1(arr){
    return arr.reduce((acc,i)=> acc +=i,0) / arr.length
}
//Принимает аргументы с которых потом делает масив
function average2(arr){
    return Array.from(arguments).reduce((acc,i)=> acc +=i,0) / arguments.length
}

// Принимает аргументы и Rest делает масив
function average3(a,...arr){
    return arr.reduce((acc,i)=> acc +=i,0) / arr.length
}


// console.log(average1([10,20,30,40,50,60,70,80,90,100]))
// console.log(average2(10,20,30,40,50,60,70,80,90,100))
// console.log(average3(10,20,30,40,50,60,70,80,90,100))

//Spread - розварачивает масив
// const array = [1,2,3,5,8,13]
// console.log(array)
// console.log(...array)
//
//
// //Метод принимает аргументы через запятую а не масивом по этому NAN
// console.log(Math.max(array))
// //Spred розбивает масив и одает уже аргументы а не масив
// console.log(Math.max(...array))
// const fib  = [1,...array]
// console.log(fib)


// Destructuring

const array = [1,2,3,5,8,13]

// const a = array[0]
// const b = array[1]

// const [a,b=42,...c] = array
const [a,,b,...c] = array
// console.log(a,b,...c)


const adres = {
    country: 'Russia',
    city: 'Moskow',
    street: 'Lenina',
    concat: function (){
        return `${this.country} ${this.city} ${this.street}`
    }
}

console.log(adres.concat())

// let {city,street="Temerazeva",country,concat} = adres
// street = 'Shevchenko'

let {city,...rest }= adres

console.log(city,rest)
console.log(adres)
let  newAdres = {}
console.log(newAdres)
newAdres = {...adres , street:'Tverskaya', code:'123'}
console.log(newAdres)