console.log("start")

const login = (username, password, callback) =>{
    setTimeout(()=>{
        callback({username: username, email: "info@sadikturan.com"}) 
    },1000)
}

const getPostsByUsername = (username, callback) =>{
    setTimeout(() => {
        callback(["post1", "post 2", "post3", "post4"])
    }, 2000);
}

const getPostDetails = (post, callback)=>{
    setTimeout(() => {
        callback("post details")
    }, 3000);
}

login("sadikturan","Izzet2001!",user =>{
    console.log(user.username)
    console.log(user.email)

    getPostsByUsername(user.username, (posts)=>{
        console.log(posts)
        getPostDetails(posts[0],(details)=>{
            console.log(details)
        })
    })
})
console.log("end")