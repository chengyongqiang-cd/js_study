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
