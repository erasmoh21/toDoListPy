import { setTemplateTask } from "./helpers/taskHelpers"

window.addEventListener("DOMContentLoaded",()=>{
    if(!localStorage.getItem("taskNumber") || localStorage.getItem("taskNumber") === "0") {
        document.getElementById("noTaskAvatar").style.display = "block"
        localStorage.setItem("taskNumber",0)
    }
})

document.getElementById("addTaskBtn").addEventListener("click",() => {
    const body = document.getElementsByTagName("body")[0]
    const containerNoTaskAvatar = document.getElementsByClassName("containerNoTaskAvatar")[0]
    const containerAddTaskForm = document.getElementsByClassName("containerAddTaskForm")[0]
    containerNoTaskAvatar.style.display = "none"
    containerAddTaskForm.style.display = "flex"
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
})

document.getElementsByClassName("closeAddTaskForm")[0].addEventListener("click",(e) => {
    const containerAddTaskForm = document.getElementsByClassName("containerAddTaskForm")[0]
    const containerNoTaskAvatar = document.getElementsByClassName("containerNoTaskAvatar")[0]
    const body = document.getElementsByTagName("body")[0]
    if(localStorage.getItem("taskNumber") === "0") {
        containerNoTaskAvatar.style.display = "flex"
        containerAddTaskForm.style.display = "none"
        body.style.backgroundColor = "#F4F1DE"
        console.log("he")
    }
    else {
        containerAddTaskForm.style.display = "none"
        containerNoTaskAvatar.style.display = "none"
        body.style.backgroundColor = "#F4F1DE"
    }
})

document.getElementById("btnAddTask").addEventListener("click",(e) => {
    e.preventDefault()
    const containerAddTaskForm = document.getElementsByClassName("containerAddTaskForm")[0]
    const containerNoTaskAvatar = document.getElementsByClassName("containerNoTaskAvatar")[0]
    const taskNameInput = document.getElementById("taskName")
    const taskDescriptionInput = document.getElementById("taskDescription")
    const scheduleTaskInput = document.getElementById("scheduleTask")
    const priorityLevelInput = document.getElementById("priorityLevel")
    const typeTaskInput = document.getElementById("typeTask")
    const addTaskHeaderBtn = document.getElementById("addTaskHeaderBtn") 
    const dataObject = {
        id: parseInt(localStorage.getItem("taskNumber"))+1,
        title: taskNameInput.value,
        description: taskDescriptionInput.value,
        deadline: scheduleTaskInput.value,
        priority: priorityLevelInput.value,
        type: typeTaskInput.value
    }
    const body = document.getElementsByTagName("body")[0]
    containerAddTaskForm.style.display = "none"
    containerNoTaskAvatar.style.display = "none"
    body.style.backgroundColor = "#F4F1DE"
    addTaskHeaderBtn.style.display = "flex"
    document.getElementById("mainContainerTasks").innerHTML += setTemplateTask(dataObject)
})

document.getElementById("addTaskHeaderBtn").addEventListener("click",(e) => {
    const body = document.getElementsByTagName("body")[0]
    const containerAddTaskForm = document.getElementsByClassName("containerAddTaskForm")[0]
    containerAddTaskForm.style.display = "flex"
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"   
    
})

const mainContainerTasks = document.getElementById("mainContainerTasks")
const config = {childList: true}
const callback = (mutationList,observer) => {
    for(const mutation of mutationList) {
        for(const addedNode of mutation.addedNodes) {
            if(addedNode.nodeName === "DIV") {
                console.log("task")
                localStorage.setItem("taskNumber",parseInt(localStorage.getItem("taskNumber"))+1)
            }
        }
    }
}

const observer = new MutationObserver(callback)
observer.observe(mainContainerTasks,config)