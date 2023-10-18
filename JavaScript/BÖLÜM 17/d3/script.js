// const msj = ["benim","adim","sadik","turan"]

// let = result = ""

// for (let word of msj){
//     result += word + " "
// }
// console.log(result)

// console.log(...msj)

// const dizi1 = ["bir","iki"]
// const dizi2 = ["uc","dord"]

// const dizi3 = [...dizi1, ...dizi2, "bes", "alti"]

// console.log(dizi3)

const sayilar1 = [1,2,3]
const sayilar2 = sayilar1
const sayilar3 = [...sayilar1]
sayilar3[0] = 100
console.log(sayilar2, sayilar3)