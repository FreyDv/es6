const  validator = {
    get(target,prop){
        return prop in target ? target[prop] : `Поле ${prop} в объекте нет`
    },
    set(target,prop,value){
        if(value.length>2){
            Reflect.set(target,prop,value)
        }else{
            console.log('Длина должна быть больше 2х символов. Сейчас '+value.length)
        }
    }
}

const form ={
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form,validator)

console.log(formProxy.login)
console.log(formProxy.password)

