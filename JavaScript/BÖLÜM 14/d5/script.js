let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
for(let item of sayilar){
    console.log(Math.pow(item,2))
}
// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
for(let item of sayilar){
    if(item%5==0){
        console.log(item)
    }
}
// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let sum =0
for(let item of sayilar){
    if(item%2==0){
        sum += item;
    }
}
console.log(sum)

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

for(let item of urunler){
    console.log(item.toUpperCase())
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?
let count = 0
for(let item of urunler){
    if(item.includes("samsung")){
        console.log(item)
        count++;
    }
}
console.log(count)

let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

for(let student of ogrenciler){
    let toplam = 0
    for(let not of student.notlar){
        toplam += not
    }
    console.log(`Student Name: ${student.ad} | Student Surname: ${student.soyad} | Ortalam Puan: ${parseInt(toplam/3)} | ${((toplam/3)>=50)? "Başaralı" : "Başarısız"}`)
}