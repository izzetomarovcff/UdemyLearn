let students = ['izzet','etibar','togrul','ayan']

// element silmek
returnelement = students.pop() // son element silinir
returnelement = students.shift() // ilk element silinir

// element elave elemek
returnelement = students.push("esqin") // sonuna element elave olunur
returnelement = students.unshift("eli") // evveline element elave edilir

let model1 = ['mazda','toyota']
let model2 = ['reno','hundai']
let model3 = ['mercedes']

let result = model1.concat(model2,model3)

console.log(result)