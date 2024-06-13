//对象作为函数参数
function myFun(obj){
 obj.name='闻锦'
}

const test_obj={
    name:'程永强',
    age:'12',
    sex:'male'
}
myFun(test_obj)
console.log(test_obj)
//数组作为函数参数
function changeArray(array){
    array[0]=2
}
const testArray=[1,2,3]
console.log(testArray)
changeArray(testArray)
console.log(testArray)

//函数表达式
const  addNumber=function (number){
    return number+number
}
console.log(addNumber(2))

//函数的参数一个是一个方法，一个是一个数组
function inputElement(array, index) {
    return array[index];
}

function applyFunctionToArray(func, array) {
    let result = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array, i);
    }
    // 将打印结果的语句移至循环之后
   // console.log(result);
    return result;
}

// 示例使用
const testArray_01 = [1, 2, 3, 4, 5];
const appliedResult = applyFunctionToArray(inputElement, testArray_01);
console.log(appliedResult)


