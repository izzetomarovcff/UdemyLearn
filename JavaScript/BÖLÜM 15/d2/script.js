let result;
result = document.getElementsByClassName("task")

for(let element of result){
    element.style.color= "red"
    element.style.fontSize= "40px"
}

console.log(result)