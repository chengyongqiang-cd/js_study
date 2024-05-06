const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()<0.5){
            resolve('这个回调成功了')
        }else {
            reject('error')
        }
    })
})

promise.then((result)=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})

//练习二
new Promise((resolve,reject)=>{
    let a=1
    let b=0
    if(b===0){
        reject('is 0')
    }
    else {
        resolve(a/b)
    }
}).then((result)=>{
    console.log('a/b'+result)
}).catch((err)=>{
     console.log(err)
}).finally(()=>{
    console.log('end')
})

//练习三
function print(delay,message){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(message)
            resolve()
        },delay)
    })
}
print(1000,'1').then(()=>{
    return print(2000,'2')
}).then(()=>{
    print(3000,'3')
})