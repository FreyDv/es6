class Student{
    constructor(name) {
        this.name = name
    }

    greet(){
        console.log(`Hi my name is ${this.name}`)
    }

}

class ProtoStudent {
    university = 'Oxford'
}
// Создает истанс класса Student и передает аргумент в конструктор ['Igor']
// и если переданн прототип третим аргументом - инстанс на выходще будет
// инстаносом переданного прототипа
const  student = Reflect.construct(Student,['Igor'],ProtoStudent)
const  student1 = Reflect.construct(Student,['Igor'])
console.log(student)

//Вызовит функцию с заданными параметрами
Reflect.apply(student1.greet,{name: 'Tester'},[])

// Показывает собственые ключи объекта
console.log(Reflect.ownKeys(student1))

// Запрещает модифицировать объект
Reflect.preventExtensions(student1)

// НЕУДАЧНАЯ Попытка модифицировать объект
student1.age = 25

// Метод проверки на возможность изменять объект
console.log(Reflect.isExtensible(student1))

console.log(student1)