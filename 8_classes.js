class Person{

    type = 'human'

    constructor(name) {
        this.name = name
    }
    greet(){
        console.log(this.name + ' seyed Hello!')
    }
}

const max = new Person('Max')
max.greet()
console.log(max.type)
console.log(max.__proto__ === Person.prototype)

class Programer extends Person{
    constructor(name,job){
        super(name)
        this._job=job
    }

    get job(){
        return this._job.toUpperCase()
    }
    set job(job){
        if(job.length < 2){
           throw new Error('Validation Error')
        }else this._job = job
    }
    greet() {
        super.greet();
        console.log('Im worked '+ this._job)
    }
}

const daniil = new Programer('Max','Beck-end')
console.log(daniil)

daniil.greet()
console.log(daniil.job)
daniil.job = '1'
console.log(daniil.job)

class Util {
    static  avarage (...args){
        return args.reduce((acc,i)=>acc+i,0) / args.length
    }
}

console.log(Util.avarage(1, 1, 2, 3, 5, 8, 13));



