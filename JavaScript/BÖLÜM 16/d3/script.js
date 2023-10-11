
function Soru(soruMetni, cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni
    this.cevapSecenekleri = cevapSecenekleri
    this.dogruCevap = dogruCevap
    console.log(this)
}

Soru.prototype.cevabiKontrolEt = function (cevap){
    return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c")
let soru2 = new Soru("Hangisi .Net paket yonetim uygulamasidir?",{a: "node.js",b: "nuget",c: "Npm"}, "b")

let sorular = [
    new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c"),
    new Soru("Hangisi .Net paket yonetim uygulamasidir?",{a: "node.js",b: "Nuget",c: "Npm"}, "b"),
    new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c"),
    new Soru("Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c")
]
