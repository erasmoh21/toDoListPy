const addTaskFormTemplate = `
    <div class="containerAddTaskForm">
        <form action="" enctype="text/plain" method="post" id="addTaskForm">
            <p class="closeAddTaskForm">X</p>
            <fieldset>
                <div class="fieldsetmember">
                    <label for="taskName">Task name:</label>
                    <input type="text" id="taskName" placeholder="Enter the task name">
                </div>
                <div class="fieldsetmember">
                    <label for="taskDescription">Description:</label>
                    <input type="text" id="taskDescription" placeholder="Enter a Description">
                </div>
                <div class="fieldsetmember">
                    <label for="scheduleTask">When you need this task completed ?</label>
                    <input type="date" id="scheduleTask">
                </div>
                <div class="fieldsetmember">
                    <label for="priorityLevel">Priority level:</label>
                    <select name="priorityLevel" id="priorityLevel">
                        <option value="3">High</option>
                        <option value="2">Medium</option>
                        <option value="1">Low</option>
                    </select>
                </div>
                <div class="fieldsetmember">
                    <label for="typeTask">Type of task:</label>
                    <select name="typeTask id="typeTask">
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="educational">Educational</option>
                        <option value="social">Social</option>
                        <option value="relationship">Relationship</option>
                        <option value="project">Project</option>
                        <option value="family">Family</option>
                        <option value="hobbie">Hobbie</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </fieldset>
        </form>
    </div>
` 
window.addEventListener("DOMContentLoaded",()=>{
    if(!localStorage.getItem("taskNumber") || localStorage.getItem("taskNumber") == "0") {
        document.getElementById("noTaskAvatar").style.display = "block"
        localStorage.setItem("taskNumber",0)
    }
})

document.getElementById("addTaskBtn").addEventListener("click",() => {
    const parentContainer = document.getElementsByTagName("main")[0]
    const body = document.getElementsByTagName("body")[0]
    const containerNoTaskAvatar = document.getElementsByClassName("containerNoTaskAvatar")[0]
    containerNoTaskAvatar.style.display = "none"
    parentContainer.innerHTML += addTaskFormTemplate
    body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
})

document.getElementsByTagName("main")[0].addEventListener("click",(e) => {
    const closeIcon = document.getElementsByClassName("closeAddTaskForm")[0]
    closeIcon.addEventListener("click",() => {
        const containerAddTaskForm = document.getElementsByClassName("containerAddTaskForm")[0]
        const body = document.getElementsByTagName("body")[0]
        const containerNoTaskAvatar = document.getElementsByClassName("containerNoTaskAvatar")[0]
        if(localStorage.getItem("taskNumber") == "0") {
            containerNoTaskAvatar.style.display = "flex"
            containerAddTaskForm.style.display = "none"
            body.style.backgroundColor = "#F4F1DE"

 
        }
   })
})