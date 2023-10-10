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