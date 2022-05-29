const array = [1,2,3,4]
const str ='Hello'

// console.log(array[Symbol.iterator])
// console.log(str[Symbol.iterator])

const iter = array[Symbol.iterator]()
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


const st = str[Symbol.iterator]()

// console.log(st.next());
// console.log(st.next());
// console.log(st.next());
// console.log(st.next());
// console.log(st.next());
// console.log(st.next());

for (const item of array) {
    // console.log(item)
}
for (const item of str) {
    // console.log(item)
}

const country = {
    values: ['ru', 'kz', 'ua', 'by'],
    [Symbol.iterator]() {
        let i =0
        return{
            next:()=>{
                const value = this.values[i]
                i++
                return{
                    done: i > this.values.length,
                    value
                }
            }
        }
    }
}

for (let item of country) {
    // console.log(item)
}


function* gen (num=4){
    for (let i = 0; i < num; i++) {
        yield i
    }
}
const it = gen(3)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
const x = 5
for (let number of it) {
    console.log(number)
}



