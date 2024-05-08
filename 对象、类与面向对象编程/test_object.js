//自定义创建对象
let person=new Object()
person.name='程永强'
person.age=10
person.sayName=function (){
    console.log(this.name)
}
person.sayName()

//对象字面量
let person_01={
    name:'闻锦',
    age:10,
    sayAge(){
        console.log(this.age)
    }

}
person_01.sayAge()

// 数据属性
let person_02 = {};
Object.defineProperties(person_02, {
    name: {
        configurable:false,//对象是否可以通过delete删除属性
        enumerable:true,//对象是否可以支持for in
        writable: true,//对象属性是否可以写入
        value: '花花'
    }
});
console.log(person_02.name); // 输出: '花花'

//访问器属性

let book={
    year_:2017,
    edition:1
}
Object.defineProperties(book,{
    year:{
        get(){
            return this.year_
        },
        set(value){
            if(value>2017){
                this.year_=value
                this.edition+=value-2017
            }
        }
    }
})
book.year=2018
console.log(book.edition)

console.log(Object.getOwnPropertyDescriptors(book))

//解构
let car={
    name:"bmw",
    age:3
}
let {name,age,color='black'}=car
console.log(name,age,color)

let {length}='doitrrrr'
console.log(length)


function createPerson(name,age,job){
    let o=new Object()
    o.name=name
    o.age=age
    o.job=job
    o.sayName=function (){
        console.log(this.name)
    }
    return o
}

let person1=createPerson('chengyongqiang',18,'codeman')
person1.sayName()

function Person(name,age,job){
    this.name=name
    this.age=age
    this.job=job
    this.sayname=function (){
        console.log(this.name)
    }
}
let person2=new Person('wenjin',19,'freedomwomem')
person2.sayname()
//函数表达式定义构造函数
let Car=function (name,age,color){
    this.name=name
    this.age=age
    this.color=color
    this.discription=function (){
        console.log(this.name+this.age+this.color)
    }
}
let car1=new Car('BMW',3,'black')
car1.discription()

//类
class Person{

}

const Animal=class {}
