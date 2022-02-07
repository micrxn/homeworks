let title = document.getElementById("title")
let priority = document.getElementById("priority")
let color = document.getElementById("color")
let description = document.getElementById("description")
let newReminderBtn = document.getElementById("addReminder")
let showAllReminders = document.getElementById("showReminders")
let reminders = []
let result = document.getElementById("result")


function CreateReminder (title, priority, color, description) {
    this.title = title,
    this.priority = priority,
    this.color = color,
    this.description = description
}

newReminderBtn.addEventListener("click", function(){
    result.innerHTML += ""
    if(title.value !== "" || priority.value !== "" || color.value !== "" || description.value !== ""){
        let newReminder = new CreateReminder(title.value, priority.value, color.value, description.value)
        reminders.push(newReminder)
    } else {
        result.innerHTML = `<h1 style="color: red">fill the empty boxes to add a reminder</h1>`
    }
});

function showReminders(remindersList, element){
    for(let i = 0; i < remindersList.length; i++){
        element.innerHTML = " "
        element.innerHTML += `<tr
        <td style="background-color: ${remindersList.color}">${remindersList[i].title}</td>
        <td>${remindersList[i].priority}</td>        
        <td>${remindersList[i].description}</td>
        </tr><br/>`
    }
}

showAllReminders.addEventListener("click", function(){
    showReminders(reminders, result)
})


