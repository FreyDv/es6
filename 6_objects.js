const cityField = 'city'
const job = 'Frontend'
const  person ={
    age:26,
    name: 'Irina',
    //если название ключа совпадает с названием  значением  тогда можно опустить ключ
    job ,
    [cityField]: 'Saint-Peterburg', // динамический ключ
    'country-live': 'Russia',  // именнованый ключ
    // toString: function (){        В объекте при объявлении функции можно опускать ключевое слово function
    toString(){
        return Object.keys(this)
            .filter(key => key !== 'toString')
            .map(key=>this[key])
            .join(' ')
    }
}

// console.log(person.toString())
// console.log(person)

const first ={a:1}
const second = {b:2}

const obj =Object.assign(first,second)
console.log(obj)

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))


