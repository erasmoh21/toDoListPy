export function setTemplateTask(dataObject={}) {
    return `
        <div class=task id=${dataObject.id}>
            <div class="mainContainerSectionTask">
                <h3>${dataObject.title}</h3>
                <hr>
                <div class="dateAndPriorityBlock">
                    <p>Deadline:${dataObject.deadline}<p>
                    <p>Priority:${dataObject.priority}</p>
                </div>
                <div>
                    <p>
                       ${dataObject.description} 
                    </p>
                </div>
            
                <div>
                    <p>
                        Type: ${dataObject.type}
                    </p>
                </div>
            </div>
        </div>
    `
}