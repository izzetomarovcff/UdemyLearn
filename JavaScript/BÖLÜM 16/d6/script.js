
function Soru(soruMetni, cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni
    this.cevapSecenekleri = cevapSecenekleri
    this.dogruCevap = dogruCevap
}

Soru.prototype.cevabiKontrolEt = function (cevap){
    return cevap === this.dogruCevap
}


let sorular = [
    new Soru("1 Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm",d: "Nuget"}, "c"),
    new Soru("2 Hangisi JavaScript yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c"),
    new Soru("3 Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c"),
    new Soru("4 Hangisi JavaScript paket yonetim uygulamasidir?",{a: "node.js",b: "TypeScript",c: "Npm"}, "c")
]

function Quiz(sorular){
    this.sorular = sorular
    this.soruIndex = 0
}

Quiz.prototype.soruGetir = function(){
   return this.sorular[this.soruIndex]
}

const quiz = new Quiz(sorular)


document.querySelector(".btn_start").addEventListener("click", function(){
    document.querySelector(".quiz_box").classList.add("active")
    soruGoster(quiz.soruGetir());
    document.querySelector(".next_btn").classList.remove("show")
    
})

document.querySelector(".next_btn").addEventListener("click", function(){
    if(quiz.sorular.length != quiz.soruIndex +1){
        quiz.soruIndex += 1
        soruGoster(quiz.soruGetir())
        document.querySelector(".next_btn").classList.remove("show")
    }else{
        console.log("quiz bitti")
    }
})
const option_list = document.querySelector(".option_list")
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>'
const inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`
    let options = '';
    for(let cevap in soru.cevapSecenekleri){
        options += `
            <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                
            </div>

        `
    }

    document.querySelector(".question_text").innerHTML = question
    option_list.innerHTML = options

    const option = option_list.querySelectorAll(".option")
    for(opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}
function optionSelected(option){
    let cevap = option.querySelector("span b").textContent
    let soru = quiz.soruGetir()


    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", correctIcon)
    }else{
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend", inCorrectIcon)
    }

    for(let i=0; i < option_list.children.length;i++){
        option_list.children[i].classList.add("disabled")
    }
    document.querySelector(".next_btn").classList.add("show")
}