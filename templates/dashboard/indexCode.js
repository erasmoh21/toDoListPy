
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
    if(localStorage.getItem("taskNumber") == "0") {
        containerNoTaskAvatar.style.display = "flex"
        containerAddTaskForm.style.display = "none"
        body.style.backgroundColor = "#F4F1DE"
    }
})

document.getElementById("btnAddTask").addEventListener("click",(e) => {
    e.preventDefault()
    const containerAddTaskForm = document.getElementsByClassName("containerAddTaskForm")[0]
    const containerNoTaskAvatar = document.getElementsByClassName("containerNoTaskAvatar")[0]
    const body = document.getElementsByTagName("body")[0]
    containerAddTaskForm.style.display = "none"
    containerNoTaskAvatar.style.display = "none"
    body.style.backgroundColor = "#F4F1DE"
    document.getElementById("mainContainerTasks").innerHTML += templateTask
})