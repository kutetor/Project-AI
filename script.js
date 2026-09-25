const taskInput = document.getElementById("taskInput"); // Hämtar inputfältet där användaren skriver en aktivitet
const addTaskButton = document.getElementById("addTaskButton"); // Hämtar knappen som används för att lägga till en aktivitet
const taskList = document.getElementById("taskList");   // Hämtar listan där aktiviteterna ska visas

addTaskButton.addEventListener("click", addTask);   // Kör funktionen addTask när användaren klickar på knappen

// Tryck Enter för att lägga till aktivitet 
taskInput.addEventListener("keydown", function (event)  // Lyssnar efter tangenttryckningar i inputfältet
{ if (event.key === "Enter") { addTask(); } }); // Kontrollerar om den nedtryckta tangenten är Enter och Kör funktionen addTask när Enter trycks

function addTask() {     
    const taskText = taskInput.value.trim();    // Hämtar texten och tar bort onödiga mellanslag i början och slutet

    if (taskText === "") {  // Kontrollerar om inputfältet är tomt
        return;     // Funktionsanrop, Programmet avslutar funktionen om användaren inte har skrivit något 
    }

    const taskItem = document.createElement("li"); // Skapar ett nytt li-element i HTML
    taskItem.classList.add("task"); // Lägger till CSS-klassen "task" på li-elementet
    taskItem.textContent = taskText;    // Lägger in texten från inputfältet i li-elementet

    taskItem.addEventListener("click", function () {    
        taskItem.classList.toggle("completed"); // Växlar mellan klassen "completed", Klassen kan till exempel användas för att visa att uppgiften är klar
    });

    const deleteButton = document.createElement("button");  // Skapar en ny knapp för att ta bort aktiviteten
    deleteButton.textContent = "🗑️";    // Lägger till sopptunna-emojin på knappen
    deleteButton.classList.add("delete-button");    // Lägger till CSS-klassen "delete-button" på knappen

    deleteButton.addEventListener("click", function (event) {     // Lyssnar efter klick på delete-knappen
        event.stopPropagation();    // Stoppar klicket från att även aktivera klicket på taskItem
        taskItem.remove();   // Tar bort aktiviteten från listan
    });

    taskItem.appendChild(deleteButton); // Lägger till delete-knappen inne i aktivitetens li-element
    taskList.appendChild(taskItem);    // Lägger till hela aktiviteten i taskList

    taskInput.value = "";
    taskInput.focus()   //placerar markören direkt i inputfältet igen
}

taskInput.focus()   //gör inputfältet aktivt direkt när sidan öppnas