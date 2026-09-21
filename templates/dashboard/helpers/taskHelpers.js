export function setTemplateTask(dataObject={}) {
    return `
        <div class=task id=${dataObject.id}>
            <div class="mainContainerSectionsTask">
                <div class="containerTitleTask"><h3>${dataObject.title}</h3></div>
                <hr>
                <div class="mainContainerDataSectionTask">
                    <div class="containerDateAndPriorityBlock">
                        <p class="deadline">Deadline: ${dataObject.deadline}</p>
                        <p class="priority">Priority: ${dataObject.priority}</p>
                    </div>
                    <div class="containerDescripctionTask">
                        <p>${dataObject.description} </p>
                    </div>
            
                    <div class="containerTypeTask">
                        <p>Type: ${dataObject.type}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

export function setCorrectBackgroundColorTypeTask(nameTask="") {
    const nameTaskToColor = {
        "Personal":     "#81B29A",
        "Educational":  "#F2CC8F",
        "Social":       "#E07A5F",
        "Relationship": "#D9777F",
        "Project":      "#3D405B",
        "Family":       "#84A98C",
        "Work":         "#4A526E",
        "Hobbie":       "#E9C46A",
        "Other":        "#E0E0CE"
    }

    return nameTaskToColor[nameTask] 
}

export function setCorrectBackgroundColorPriorityTask(priorityTask="") {
    const priorityTaskToColor = {
        "High": "#C84B31",
        "Medium": "#E07A5F",
        "Low": "#81B29A"
    }

    return priorityTaskToColor[priorityTask]
}

export function setCorrectBackgroundColorDeadline(deadline="") {
    console.log(deadline)
}

export function setColorDependingOnDate(deadline=0) {
    const today = new Date().getDate()
    const diff = deadline - today
    let colorObject = {} 
    if((diff) > 6) {
        colorObject.backgroundColor = "#F4F6F4" 
        colorObject.textColor = "#3D405B"
    }
    else if((diff) >= 3 && (diff) < 5) {
        colorObject.backgroundColor = "#81B29A" 
        colorObject.textColor = "#FFFFFF"
    }
    else if((diff) >= 1 && (diff) < 2) {
        colorObject.backgroundColor = "#E07A5F"
        colorObject.textColor = "#FFFFFF"
    }

    return colorObject
}