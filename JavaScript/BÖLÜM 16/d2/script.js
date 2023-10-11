// let soru = {
//     soruMetni: "Hangisi JavaScript paket yonetim uygulamasidir?",
//     cevapSecenekleri: {
//         a: "node.js",
//         b: "TypeScript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function (cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// let soru2 = {
//     soruMetni: "Hangisi .Net paket yonetim uygulamasidir?",
//     cevapSecenekleri: {
//         a: "node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function (cevap) {
//         return cevap === this.dogruCevap
//     }
// }

function Soru(soruMetni, cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni
    this.cevapSecenekleri = cevapSecenekleri
    this.dogruCevap = dogruCevap
    this.cevabiKontrolEt = function (cevap){
        return cevap === this.dogruCevap
    }
}

let soru1 = new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c")
let soru2 = new Soru("Hangisi .Net paket yonetim uygulamasidir?",{a: "node.js",b: "nuget",c: "Npm"}, "b")

let sorular = [
    new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c"),
    new Soru("Hangisi .Net paket yonetim uygulamasidir?",{a: "node.js",b: "Nuget",c: "Npm"}, "b"),
    new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c"),
    new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c")
]

console.log(soru1.cevabiKontrolEt("c"))
console.log(soru2.cevabiKontrolEt("b"))