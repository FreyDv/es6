// function sum (a,b){
//  return a+b
// }
//
// function cube(a){
//     return a**3
// }

//arrow

const sum = (a,b) => a+b
const cube = a => a**3

// console.log(sum(41,1))
// console.log(cube(4))

// setTimeout(()=>console.log('After 1 second'),1000)

//Context
function log(){
    console.log(this)
}

const arrowLog = () => console.log(this)

const  person = {
    name:'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,


    delayLogNotWork: function(){
        //Функция создает свой контекст на основе обекта глобал так как она вызывается с Global.setTimeout
        setTimeout(function () {
            console.log('Name: '+this.name+ ' Age: ' +this.age)
        },100)
    },
    // Заминили контекст на заранее поготовленый
    delayLogWork: function(){
        self = this
        setTimeout(function () {
            console.log('Name: '+self.name+ ' Age: ' +self.age)
        },200)
    },

    //Стрелочная функция не создает свой контекст а пользуется контекстом который выше
    delayLogWorkWithArrowFunc: function(){
        setTimeout(()=> console.log('Name: '+this.name+ ' Age: ' +this.age)
        ,300)
    }
}

// log()
// arrowLog()

// person.log()
// person.arrowLog()

person.delayLogNotWork()
person.delayLogWork()
person.delayLogWorkWithArrowFunc()
