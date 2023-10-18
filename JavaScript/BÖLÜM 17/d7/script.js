
//class
class Kisi{
    constructor(ad, meslek, dogumYili){
        this.ad = ad
        this.meslek = meslek
        this.dogumYili = dogumYili
    }
    yasHesapla(){
        let tarih = new Date().getFullYear()
        return tarih - this.dogumYili
    }
    get ad(){
        return this._ad
    }

    set ad(value){
        this._ad = value
    }
}

let kisi1 = new Kisi("Emre Yagci", "ogrenci", 1990)

console.log(Kisi)
console.log(Kisi.ad)
