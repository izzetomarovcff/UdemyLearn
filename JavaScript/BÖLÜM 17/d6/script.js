// constructor
function KisiES5(ad, meslek, dogumYili){
    this.ad = ad
    this.meslek = meslek
    this.dogumYili = dogumYili
}
KisiES5.prototype.yasHesapla = function(){
    let tarih = new Date().getFullYear()
    return tarih - this.dogumYili
}

let emre = new KisiES5("Emre Yagci", "ogrenci", 1990)
let ahmet = new KisiES5("Ahmet Yilmaz", "ogretmen", 1985)

console.log(emre.yasHesapla())
console.log(ahmet.yasHesapla())

//class
class KisiES6{
    constructor(ad, meslek, dogumYili){
        this.ad = ad
        this.meslek = meslek
        this.dogumYili = dogumYili
        console.log("nesne olusturuldu")
    }
    yasHesapla(){
        let tarih = new Date().getFullYear()
        return tarih - this.dogumYili
    }
}

let kisi1 = new KisiES6("Emre Yagci", "ogrenci", 1990)
let kisi2 = new KisiES6("Ahmet Yilmaz", "ogretmen", 1985)

console.log(kisi1.yasHesapla())
console.log(kisi2.yasHesapla())