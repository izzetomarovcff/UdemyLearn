// XML JSON
const searchcountry = document.querySelector("#searchcountry")
let searchValue = ""

searchcountry.addEventListener("input",(e)=>{
    searchValue = e.target.value
    displayCountry(searchValue)
})

function displayCountry(country) {

    const request = new XMLHttpRequest()

    request.open('GET', 'https://restcountries.com/v3.1/name/' + country);

    request.send()

    // async

    request.addEventListener("load", function () {
        const data = JSON.parse(this.response)
        setCounrty(data)
    })
}

function setCounrty(data){
    document.querySelector(".container #countrys").innerHTML = ""

    data.map(function(contry){
        console.log(contry)
        let html = `
        <div class = "col-3">
        <div class = "card h-100">
        <img src="${contry.flags.png}" class = "card-img-top">
        <div class = "card-body">
            <h5 class = "card-title">${contry.name.common}</h5>
        </div>
        <ul class = "list-group list-group-flush">
            <li class = "list-group-item">Population : ${(contry.population / 1000000).toFixed(1)}</li>
            <li class = "list-group-item">Capital : ${contry.capital}</li>
            <li class = "list-group-item">Language : ${Object.values(contry.languages)}</li>
            
        </ul>
    </div>
        </div>
    `
    document.querySelector(".container #countrys").insertAdjacentHTML("beforeend", html)
    })
    
}
