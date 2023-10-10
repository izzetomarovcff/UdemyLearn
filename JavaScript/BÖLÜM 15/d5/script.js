let result;

let gorevListesi = [
    {"id": 1, gorevAdi: "Gorev 1"},
    {"id": 2, gorevAdi: "Gorev 2"},
    {"id": 3, gorevAdi: "Gorev 3"},
    {"id": 4, gorevAdi: "Gorev 4"},
];
ul =  document.getElementById("task-list")


for(let gorev of gorevListesi){
    let li = `
    <li class="task list-group-item">
        <div class="form-check">
            <input type="checkbox" id="${gorev.id}" class="form-check-input">
            <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
        </div>
    </li>  
`;
ul.insertAdjacentHTML("beforeend", li)
}

// document.querySelector("#task-list").parentElement.remove()
// document.querySelector("#task-list").children[2].remove()

// document.querySelector("#task-list").removeAttribute("class")
// document.querySelector("#task-list").children[1].removeAttribute("class")
// result = document.querySelector("#task-list").children[1].getAttribute("class")
// document.querySelector("#task-list").children[1].setAttribute("class", "bombe")
// result = document.querySelector("#task-list").children[1].classList
document.querySelector("#task-list").children[1].classList.add("bg-danger")
// document.querySelector("#task-list").children[1].classList.remove("bg-danger")
result = document.querySelector("#task-list").children[1].classList.contains("bg-danger")

console.log(result)