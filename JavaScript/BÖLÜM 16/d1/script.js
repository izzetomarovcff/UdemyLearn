let soru = {
    soruMetni: "Hangisi JavaScript paket yonetim uygulamasidir?",
    cevapSecenekleri: {
        a: "node.js",
        b: "TypeScript",
        c: "Npm"
    },
    dogruCevap: "c",
    cevabiKontrolEt: function (cevap) {
        return cevap === this.dogruCevap
    }
}

let soru2 = {
    soruMetni: "Hangisi .Net paket yonetim uygulamasidir?",
    cevapSecenekleri: {
        a: "node.js",
        b: "nuget",
        c: "Npm"
    },
    dogruCevap: "b",
    cevabiKontrolEt: function (cevap) {
        return cevap === this.dogruCevap
    }
}


console.log(soru.cevabiKontrolEt("c"))
console.log(soru2.cevabiKontrolEt("b"))