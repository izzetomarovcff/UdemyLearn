const serverStatus = true

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(serverStatus){
            resolve({username:"sadikturan"})
        }else{
            reject("login error")
        }
    },2000)
})

promise.then(user => {
    console.log(user);
}).catch(err => {
    console.log(err)
})