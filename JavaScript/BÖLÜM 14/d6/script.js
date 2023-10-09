function selamlama(name){
    console.log("Meraba! " + name)
}

function getAge(birthYear){
    return new Date().getFullYear()-birthYear
}

function emekliKacYilKaldi(birthday, name){
    console.log(`${name} sizin emekliliginize ${50 - getAge(birthday)} yil kaldi`)
}
emekliKacYilKaldi(2001,"Izzet")