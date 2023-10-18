// array destructing
let user = ["sadik","turan","kocaeli","izmit","41000"]

// let firstName = name[0]
// let lastName = name[1]

// let [firstName, lastName] = name
// let [firstName, lastName] = "Sadik Turan".split(" ")
let [firstName, lastName, ...address] = user;

console.log(firstName, lastName, address)