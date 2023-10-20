const request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.com/v3.1/name/turkey');

request.send()

request.addEventListener("load",function (){
    const data = this.response
    console.log(data)
    console.log(typeof(data))
})