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

// document.querySelector("#btnClear").addEventListener("click",(event)=>{
//     console.log("clicked clear button")
//     event.preventDefault();
// })


document.querySelector("#btnAddNewTask").addEventListener("click",newTask)

function newTask(event){
    event.target.classList.add("btn-lg")
    console.log(event.target)
    event.preventDefault(); 
}

console.log(result)