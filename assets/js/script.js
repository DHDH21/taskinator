// Create your HTML Page via DOM Methods here!
var body = document.body;

var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function() { 
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

buttonEl.addEventListener("click", createTaskHandler);
  
// TODO: Add a centered h1

// TODO: Add a centered h2

// TODO: Add a centered image with a centered caption under it

// TODO: Add a list of your favorite foods (or other favorites)
