const ToDoInputForm = document.getElementById('ToDoListSubmitForm')
const ToDoListForm = document.getElementById('ToDoListForm')

function ToDoListSubmit(event){
    event.preventDefault()

    
    //variables
    const ToDoData = new FormData(ToDoInputForm)
    const toDoInstance = ToDoData.get("ToDoListContent")

    //Adding the To Do List Content to the form
    //with some validity for empty data
    if(toDoInstance === ""){

    }else{
        const ToDoOutput = document.createElement("label")
        ToDoOutput.setAttribute('id', 'toDoListLabel')
        ToDoOutput.innerHTML = `<input type="checkbox" id="ToDoListBox" onclick="taskCompleted()"><span>${toDoInstance}</span>`

        ToDoListForm.appendChild(ToDoOutput)
    }
}

//removing a Task that has been completed on being checked
function taskCompleted(){
    let completedTask = document.querySelectorAll('#ToDoListBox')
    let completedTaskContainer = document.querySelectorAll('#toDoListLabel')

    for(let i = 0; i < completedTask.length; i++){
        if(completedTask[i].checked === true){
            completedTaskContainer[i].remove()
        }else{

        }
    }
}


ToDoInputForm.addEventListener("submit", ToDoListSubmit)