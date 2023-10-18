const sayilar = [1,5,7,3,2,67]
const urunler = [
    {urunadi:"iphone 11", fiyat: 12000},
    {urunadi:"iphone 12", fiyat: 15000},
    {urunadi:"iphone 13", fiyat: 18000},
    {urunadi:"iphone 13 Pro", fiyat: 22000},
]
// console.log("of sayilar")
// for(let sayi of sayilar){
//     if(sayi%2 == 0){
//         console.log(sayi)
//     }
// }

// console.log("in sayilar")
// for(let index in sayilar){
//     if(sayilar[index]%2 == 1){
//         console.log(sayilar[index])
//     }
// }
// console.log("sadikturan")
// const tekSayiKontrol = (sayi)=> sayi % 2 == 1
// const teksayilar = sayilar.filter(tekSayiKontrol)
// console.log(teksayilar)

// console.log("me\n")
// const arr = sayilar.filter((sayi)=>{
//     return sayi % 2 == 1
// })
// const arr2 = sayilar.filter((sayi)=>sayi % 2 == 0)
// console.log(arr)
// console.log(arr2)

// const result = sayilar.filter((sayi)=> sayi % 2 == 1)
// const result = sayilar.map((sayi)=> sayi % 2 == 1)
// const result = urunler.map((urun)=> urun)
// const result = urunler.map((urun)=> urun.urunadi)
// const result = urunler.filter((urun)=> urun.fiyat > 13000)
// const result = urunler.filter((urun)=> urun.fiyat < 13000).map((urun)=>urun.urunadi)
//  const result = urunler.find((urun)=>urun.fiyat > 12000)
 const result = urunler.findIndex((urun)=>urun.fiyat > 18000)

console.log(result)