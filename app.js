// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners

todoButton.addEventListener('click', addTodo);

// Functions

function addTodo(event){
    //Prevent form from sumbitting
    event.preventDefault();
    console.log("Clicked");

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = 'Hey';

    todoDiv.appendChild(newTodo);

    //Check mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton);

    //apend to list

    todoList.appendChild(todoDiv);
}
