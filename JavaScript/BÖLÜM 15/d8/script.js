let gorevListesi = [
    
];

displayTask()

function displayTask(){
    ul =  document.getElementById("task-list")
    ul.innerHTML= "";

    for(let gorev of gorevListesi){
        let li = `
                <li class="task list-group-item">
                    <div class="form-check">
                        <input type="checkbox" id="${gorev.id}" class="form-check-input">
                        <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
                    </div>
                    <div class="dropdown">
                            <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-ellipsis"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
                            </ul>
                        </div>
                </li>  
        `;
    ul.insertAdjacentHTML("beforeend", li)

}
}


document.querySelector("#btnAddNewTask").addEventListener("click",newTask)
document.querySelector("#btnAddNewTask").addEventListener("keypress",(event)=>{
    if(event.key == "Enter" ){
        document.getElementById("btnAddNewTask").click()
    }
})

function newTask(event){

    let taskInput = document.querySelector("#textTaskName")

    if(taskInput.value == ""){
        alert("Gorev Girmelisiniz!")
    }else{
        gorevListesi.push({"id": gorevListesi.length +1, gorevAdi: taskInput.value})
        taskInput.value = ""
        displayTask()
    }
    
    event.preventDefault(); 
}

function deleteTask(id) {

    let deletedId;
    
    for(let index in gorevListesi) {
        if(gorevListesi[index].id == id) {
            deletedId = index;
        }
    }

    // deletedId = gorevListesi.findIndex(function(gorev) {
    //     return gorev.id == id;
    // });

    // arrow function
    // deletedId = gorevListesi.findIndex(gorev => gorev.id == id);

    gorevListesi.splice(deletedId, 1);
    displayTask();
}